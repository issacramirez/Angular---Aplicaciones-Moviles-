import { Injectable } from '@angular/core';
import { Carrer } from "./carrer.model";

@Injectable({
  providedIn: 'root'
})
export class CarrersService {

  private carrers: Carrer[] = [
    {
      id: '1',
      nombre: 'Lic en Ciencias Computacionales',
      imageURL: 'http://www.fcfm.uanl.mx/sites/default/files/LCC.jpg',
      coments: ['Carrera relacionada a la informatica computacional']
    },
    {
      id: '2',
      nombre: 'Lic en Multimedia y Animacion Digital',
      imageURL: 'http://www.fcfm.uanl.mx/sites/default/files/LMAD_0.jpg',
      coments: ['Carrera relacionada a la creacion de video juegos y multimedia']
    },
    {
      id: '3',
      nombre: 'Lic en Matematicas',
      imageURL: 'http://www.fcfm.uanl.mx/sites/default/files/LM_0.jpg',
      coments: ['Carrera relacionada a las matematicas']
    },
    {
      id: '4',
      nombre: 'Lic en Fisica',
      imageURL: 'http://www.fcfm.uanl.mx/sites/default/files/LF.jpg',
      coments: ['Carrera relacionada a fisica']
    },
    {
      id: '5',
      nombre: 'Lic en Seguridad en Tecnologias de la Informacion',
      imageURL: 'http://www.fcfm.uanl.mx/sites/default/files/LSTI.jpg',
      coments: ['Carrera relacionada a seguridad informatica']
    },
  ]

  constructor() { }

  getCarrers(){
    return [...this.carrers]
  }

  getCarrer(carrerId: string){
    return {
      ...this.carrers.find(carrer => {
      return carrer.id === carrerId
      })
    }
  }

  addCarrer(nombre: string, imageURL: string){
    this.carrers.push({
      id: this.carrers.length + 1 + "",
      nombre,
      imageURL,
      coments: []
    });
  }

  deleteCarrer(carrerId: string){
    this.carrers = this.carrers.filter(carrer => {
      return carrer.id !== carrerId
    })
  }
}
