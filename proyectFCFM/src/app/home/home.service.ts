import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  ionToggle: boolean = true;

  changeDarkMode(){
    this.ionToggle = !this.ionToggle;
    document.body.classList.toggle('dark');
    console.log(this.ionToggle);
  }
}
