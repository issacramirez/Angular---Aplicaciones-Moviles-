import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarrersService } from '../carrers.service';
import { Carrer } from '../carrer.model';
import { Howl } from "howler";


@Component({
  selector: 'app-carrers-detail',
  templateUrl: './carrers-detail.page.html',
  styleUrls: ['./carrers-detail.page.scss'],
})
export class CarrersDetailPage implements OnInit {

  carrer: Carrer;

  constructor(private activectedRoute: ActivatedRoute, private carrersService: CarrersService) { }

  ngOnInit() {
    this.activectedRoute.paramMap.subscribe(paramMap => {
      //validar redirect
      const recipeId = paramMap.get('carrerId')
      this.carrer = this.carrersService.getCarrer(recipeId);
      console.log(this.carrer)
    })
  }

  activeAudio: string = null;
  player: Howl = null;
  isPlaying = false;

  start(audio: string, event: any) {
    if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [audio],
      onplay: () => {
        this.isPlaying = true;
        this.activeAudio = audio;
      },
      onend: () => {
        this.isPlaying = false;
      }
    })
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if(pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }

}
