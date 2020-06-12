import { Component, OnInit } from '@angular/core';
import { IonSlides } from "@ionic/angular";
import { ViewChild } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  constructor(private browser: InAppBrowser) { }

  ngOnInit() {
  }

  openUrl(){
    this.browser.create('https://www.facebook.com/DifusionculturalFCFM/');
  }

  openUrl2(){
    this.browser.create('https://www.facebook.com/NBisontes/');
  }
  // @ViewChild('slides') slider: IonSlides;
  slidesOptions = {
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    zoom:{
      maxRatio: 5
    }
  };

  slides = [

    {
      img: 'assets/ajedrez.jpg',
      titulo: 'Ajedrez'
    },
    {
      img: 'assets/basquetball.jpg',
      titulo: 'Basquetbol'
    },
    {
      img: 'assets/cad.jpg',
      titulo: 'Cad'
    },

    {
      img: 'assets/doblaje.jpg',
      titulo: 'Club de doblaje'
    },
    {
      img: 'assets/footballame.jpg',
      titulo: 'Futbol americano'
    },
    {
      img: 'assets/futbol.jpg',
      titulo: 'Futbol'
    },
    {
      img: 'assets/toshito.jpg',
      titulo: 'Tochito'
    },
    {
      img: 'assets/voleyball.jpg',
      titulo: 'Voleibol'
    },
    {
      img: 'assets/clubdeteatro.jpg',
      titulo: 'Club de teatro'
    },
    {
      img: 'assets/clubdedanza.jpg',
      titulo: 'Club de danza'
    },
    {
      img: 'assets/tuna.jpg',
      titulo: 'Tuna'
    }
  ]

  deportes = [
    {
      imagen: 'assets/iconoamericano.jpg',
      nombre: 'Futbol americano'
    },

    {
      imagen: 'assets/iconobasquetball.jpg',
      nombre: 'Basquetbol'
    },

    {
      imagen: 'assets/iconofutbol.jpg',
      nombre: 'Futbol'
    },

    {
      imagen: 'assets/iconosoftball.jpg',
      nombre: 'Softball'
    },

    {
      imagen: 'assets/iconotoshito.jpg',
      nombre: 'Toshito'
    }
  ]

  culturales = [
    {
      imagen: 'assets/iconoajedrez.jpg',
      nombre: 'Ajedrez'
    },
    {
      imagen: 'assets/iconofut.jpg',
      nombre: 'Futbol'
    },
    {
      imagen: 'assets/iconomandolina.png',
      nombre: 'Tuna'

    },
    {
      imagen: 'assets/iconotablet.png',
      nombre: 'CAD'
    },
    {
      imagen: 'assets/iconoteatro.png',
      nombre: 'Tetro'
    }
  ]

}
