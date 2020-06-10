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
      coments: ['Objetivo: Formar profesionistas dedicados al estudio de las Ciencias Computacionales, con capacidad de crear, desarrollar e implementar tecnologías de información y comunicación, para apoyar el ámbito económico, social y científico de la región y del país, a través del desarrollo y conocimiento tecnológico.']
    },
    {
      id: '2',
      nombre: 'Lic en Multimedia y Animacion Digital',
      imageURL: 'assets/LMAD.jpg',
      coments: ['Objetivo: Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte digital y medios interactivos, haciendo uso de TICs y arte gráfico, para los sectores público y privado.']
    },
    {
      id: '3',
      nombre: 'Lic en Matematicas',
      imageURL: 'assets/LM.jpg',
      coments: ['Objetivo: Formar profesionales de las Matemáticas, con capacidad para integrar conocimientos y colaborar en la solución de los diversos problemas específicos, fomentando el desarrollo de la comunidad, en los aspectos de docencia e investigación básica y aplicada.']
    },
    {
      id: '4',
      nombre: 'Lic en Fisica',
      imageURL: 'assets/LF.jpg',
      coments: ['Objetivo: Formar profesionales con una preparación general en el área de las ciencias físicas, que les permita participar en el desarrollo científico, tecnológico, docencia e investigación para la sociedad.']
    },
    {
      id: '5',
      nombre: 'Lic en Seguridad en Tecnologias de la Informacion',
      imageURL: 'assets/LSTI.jpg',
      coments: ['Objetivo: Formar profesionales en la Licenciatura en Seguridad en Tecnologías de Información con sentido humanista, creativo e innovador, capaces de generar, difundir y aplicar el conocimiento para responder a las demandas del desarrollo científico, tecnológico, económico y social de la región y del país en el contexto internacional.']
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
