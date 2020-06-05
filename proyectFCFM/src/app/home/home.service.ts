import { Injectable } from '@angular/core';
import { Logos } from "./home.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  ionToggle: boolean = true;

  private logos: Logos[] =[
    {
      id: '1',
      nombre: 'FCFM',
      imageURL: 'assets/FCFM.jpg',
    },
    {
      id: '2',
      nombre: 'FCFM',
      imageURL: 'assets/UANL.jpg',
    }
  ]

  changeDarkMode(){
    this.ionToggle = !this.ionToggle;
    document.body.classList.toggle('dark');
    console.log(this.ionToggle);
  }
}
