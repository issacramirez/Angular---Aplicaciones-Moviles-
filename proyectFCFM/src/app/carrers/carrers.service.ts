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
      imageURL: 'assets/LCC.jpg',
      coments: ['Formar profesionistas dedicados al estudio de las Ciencias Computacionales, con capacidad de crear, desarrollar e implementar tecnologías de información y comunicación, para apoyar el ámbito económico, social y científico de la región y del país, a través del desarrollo y conocimiento tecnológico.']
    },
    {
      id: '2',
      nombre: 'Lic en Multimedia y Animacion Digital',
      imageURL: 'assets/LMAD.jpg',
      coments: ['Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte digital y medios interactivos, haciendo uso de TICs y arte gráfico, para los sectores público y privado.']
    },
    {
      id: '3',
      nombre: 'Lic en Matematicas',
      imageURL: 'assets/LM.jpg',
      coments: ['Carrera relacionada a las matematicas']
    },
    {
      id: '4',
      nombre: 'Lic en Fisica',
      imageURL: 'assets/LF.jpg',
      coments: ['Carrera relacionada a fisica']
    },
    {
      id: '5',
      nombre: 'Lic en Seguridad en Tecnologias de la Informacion',
      imageURL: 'assets/LSTI.jpg',
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
