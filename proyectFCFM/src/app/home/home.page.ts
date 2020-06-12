import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ionToggle: boolean = false;

  constructor(private homeService: HomeService ) {}

  changeDark(){
    this.homeService.changeDarkMode()
  }

  images = [
    {
      img: 'assets/FCFM.jpg'
    },
    {
      img: 'assets/UANL.jpg'
    }
  ]


}
