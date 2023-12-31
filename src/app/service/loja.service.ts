import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

    relogio = [
      {
        "id": 0,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/gShockPreto.png",
        "preco": 150
      },
      {
        "id": 1,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "laranja",
        "urlImagem": "/assets/Images/gShockLaranja.png",
        "preco": 140
      },
      {
        "id": 3,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/IMG-20230802-WA0002.jpg",
        "preco": 120
      },

      {
        "id": 4,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/IMG-20230802-WA0004.jpg",
        "preco": 200
      },
      {
        "id": 5,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/IMG-20230802-WA0005.jpg",
        "preco": 200
      },
      {
        "id": 6,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/IMG-20230802-WA0007.jpg",
        "preco": 200
      },
      {
        "id": 7,
        "modelo": "g-shock",
        "marca": "casio",
        "cor": "preto",
        "urlImagem": "/assets/Images/IMG-20230802-WA0008.jpg",
        "preco": 200
      }
    ]

    // tenis = [
    //   {
    //     "id": 2,
    //     "modelo": "ultra range",
    //     "marca": "vans",
    //     "cor": "preto",
    //     "urlImagem": "/assets/Images/vansPretoRange.png",
    //     "preco": 200
    //   }
    // ]




}
