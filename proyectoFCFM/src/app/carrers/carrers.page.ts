import { Component, OnInit } from '@angular/core';
import { CarrersService } from "./carrers.service";
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.page.html',
  styleUrls: ['./carrers.page.scss'],
})
export class CarrersPage implements OnInit {

  carrers = []
  constructor(private carrerService: CarrersService, private homeService: HomeService ) { }


  ngOnInit() {
    this.carrers = this.carrerService.getCarrers()
  }

}
