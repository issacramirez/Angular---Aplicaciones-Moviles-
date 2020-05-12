import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarrersService } from '../carrers.service';
import { Carrer } from '../carrer.model';

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

}
