import { DogsService } from './dogs.service';
import { Component, OnInit } from '@angular/core';

export interface Dogs {
  id: number
  noun: string
  female: boolean
  birthdate: Date
  sterilized: boolean
  chemical: boolean
  color: string
  dead: boolean
  idClient: number
  idBreed: number
  idCrossBreed: number
}

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})


export class DogsComponent implements OnInit {

  // Mat Table Columns
  displayedColumns: string[] = ['id', 'noun', 'female', 'birthdate', 'sterilized', 'chemical', 'color', 'dead', 'idClient', 'idBreed', 'idCrossBreed', 'client']

  dogs: Dogs[] = []

  // Api Extract

  dogs_extract = [
    {
        "id": 1,
        "noun": "Luna",
        "female": 1,
        "birthdate": "2010-12-15",
        "sterilized": 1,
        "chemical": 0,
        "color": "Noir et blanc",
        "dead": 0,
        "idClient": 1,
        "idBreed": 7,
        "idCrossBreed": null,
        "client": {
            "id": 1,
            "firstname": "Loïc",
            "lastname": "Viret",
            "female": 0,
            "email": "loic.viret@gmail.com",
            "phone": "+41793440735",
            "street": "Près-les-Bois 26a",
            "idLocality": 3264
        },
        "breed": {
            "id": 7,
            "link": "https://www.toutoupourlechien.com/race-de-chien/american-staffordshire.html",
            "picture": "https://static.toutoupourlechien.com/2018/04/American-Staffordshire-Terrier-appartement.jpg",
            "noun": "American staffordshire Terrier",
            "idCategory": 3,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 43,
            "maxSizeFemale": 46,
            "minSizeMale": 46,
            "maxSizeMale": 48,
            "minWeightFemale": 25,
            "maxWeightFemale": 30,
            "minWeightMale": 25,
            "maxWeightMale": 30,
            "lifeExpectancy": 13
        },
        "crossbreed": null
    },
    {
        "id": 2,
        "noun": "Lucas",
        "female": 0,
        "birthdate": "2013-06-01",
        "sterilized": 1,
        "chemical": 0,
        "color": null,
        "dead": 0,
        "idClient": 2,
        "idBreed": 24,
        "idCrossBreed": 338,
        "client": {
            "id": 2,
            "firstname": "Gaëlle",
            "lastname": "Ruppen",
            "female": 1,
            "email": "gaelle.ruppen@gmail.com",
            "phone": "+41763212367",
            "street": null,
            "idLocality": null
        },
        "breed": {
            "id": 24,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-allemand.html",
            "picture": "https://static.toutoupourlechien.com/2019/05/race-berger-allemand.jpg",
            "noun": "Berger Allemand",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 55,
            "maxSizeFemale": 60,
            "minSizeMale": 60,
            "maxSizeMale": 65,
            "minWeightFemale": 22,
            "maxWeightFemale": 32,
            "minWeightMale": 30,
            "maxWeightMale": 40,
            "lifeExpectancy": 11
        },
        "crossbreed": {
            "id": 338,
            "link": null,
            "picture": null,
            "noun": "X",
            "idCategory": null,
            "morphotype": null,
            "classification": null,
            "minSizeFemale": null,
            "maxSizeFemale": null,
            "minSizeMale": null,
            "maxSizeMale": null,
            "minWeightFemale": null,
            "maxWeightFemale": null,
            "minWeightMale": null,
            "maxWeightMale": null,
            "lifeExpectancy": null
        }
    },
    {
        "id": 3,
        "noun": "Naya",
        "female": 1,
        "birthdate": "2017-10-16",
        "sterilized": 0,
        "chemical": 0,
        "color": "Roux",
        "dead": 0,
        "idClient": 3,
        "idBreed": 30,
        "idCrossBreed": null,
        "client": {
            "id": 3,
            "firstname": "Amael",
            "lastname": "Leibundgut",
            "female": 0,
            "email": "a.leibundgut11@gmail.com",
            "phone": "+41795792530",
            "street": null,
            "idLocality": null
        },
        "breed": {
            "id": 30,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-belge-tervueren.html",
            "picture": "https://static.toutoupourlechien.com/2018/06/berger-belge-tervueren-gris.jpg",
            "noun": "Berger Belge Tervueren",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 56,
            "maxSizeFemale": 62,
            "minSizeMale": 60,
            "maxSizeMale": 66,
            "minWeightFemale": 20,
            "maxWeightFemale": 25,
            "minWeightMale": 25,
            "maxWeightMale": 30,
            "lifeExpectancy": 11
        },
        "crossbreed": null
    },
    {
        "id": 4,
        "noun": "Gigi",
        "female": 1,
        "birthdate": "2014-01-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Roux",
        "dead": 0,
        "idClient": 4,
        "idBreed": 29,
        "idCrossBreed": 338,
        "client": {
            "id": 4,
            "firstname": "Elaine",
            "lastname": "Ordjonikidze",
            "female": 1,
            "email": "e.ordjoni@gmail.com",
            "phone": "+41767428489",
            "street": "Tunnel",
            "idLocality": 3269
        },
        "breed": {
            "id": 29,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-belge.html",
            "picture": "https://static.toutoupourlechien.com/2017/07/berger-belge-malinois.jpg",
            "noun": "Berger belge Malinois",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 56,
            "maxSizeFemale": 62,
            "minSizeMale": 60,
            "maxSizeMale": 66,
            "minWeightFemale": 20,
            "maxWeightFemale": 25,
            "minWeightMale": 25,
            "maxWeightMale": 30,
            "lifeExpectancy": 12
        },
        "crossbreed": {
            "id": 338,
            "link": null,
            "picture": null,
            "noun": "X",
            "idCategory": null,
            "morphotype": null,
            "classification": null,
            "minSizeFemale": null,
            "maxSizeFemale": null,
            "minSizeMale": null,
            "maxSizeMale": null,
            "minWeightFemale": null,
            "maxWeightFemale": null,
            "minWeightMale": null,
            "maxWeightMale": null,
            "lifeExpectancy": null
        }
    },
    {
        "id": 5,
        "noun": "Metsä",
        "female": 1,
        "birthdate": "2017-01-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Noir et blanc",
        "dead": 0,
        "idClient": 4,
        "idBreed": 61,
        "idCrossBreed": 220,
        "client": {
            "id": 4,
            "firstname": "Elaine",
            "lastname": "Ordjonikidze",
            "female": 1,
            "email": "e.ordjoni@gmail.com",
            "phone": "+41767428489",
            "street": "Tunnel",
            "idLocality": 3269
        },
        "breed": {
            "id": 61,
            "link": "https://www.toutoupourlechien.com/race-de-chien/border-collie.html",
            "picture": "https://static.toutoupourlechien.com/2019/05/Border-Collie.jpg",
            "noun": "Border collie",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 45,
            "maxSizeFemale": 52,
            "minSizeMale": 50,
            "maxSizeMale": 55,
            "minWeightFemale": 15,
            "maxWeightFemale": 25,
            "minWeightMale": 15,
            "maxWeightMale": 25,
            "lifeExpectancy": 15
        },
        "crossbreed": {
            "id": 220,
            "link": "https://www.toutoupourlechien.com/race-de-chien/husky-siberien.html",
            "picture": "https://static.toutoupourlechien.com/2019/05/race-husky.jpg",
            "noun": "Husky sibérien",
            "idCategory": 5,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 50,
            "maxSizeFemale": 56,
            "minSizeMale": 53,
            "maxSizeMale": 60,
            "minWeightFemale": 15,
            "maxWeightFemale": 23,
            "minWeightMale": 20,
            "maxWeightMale": 28,
            "lifeExpectancy": 13
        }
    },
    {
        "id": 6,
        "noun": "Lutin",
        "female": 0,
        "birthdate": "2016-01-01",
        "sterilized": 1,
        "chemical": 1,
        "color": "Merle",
        "dead": 1,
        "idClient": 5,
        "idBreed": 26,
        "idCrossBreed": null,
        "client": {
            "id": 5,
            "firstname": "Stephanie",
            "lastname": "Baumann",
            "female": 1,
            "email": "fanelia@faneliart.fr",
            "phone": "+41767428489",
            "street": null,
            "idLocality": null
        },
        "breed": {
            "id": 26,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-australien-miniature.html",
            "picture": "https://static.toutoupourlechien.com/2018/06/mini-berger-australien.jpg",
            "noun": "Berger Australien Miniature",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 35,
            "maxSizeFemale": 45,
            "minSizeMale": 35,
            "maxSizeMale": 45,
            "minWeightFemale": 8,
            "maxWeightFemale": 18,
            "minWeightMale": 8,
            "maxWeightMale": 18,
            "lifeExpectancy": 13
        },
        "crossbreed": null
    },
    {
        "id": 7,
        "noun": "Doogy",
        "female": 0,
        "birthdate": "2015-06-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Blanc",
        "dead": 0,
        "idClient": 6,
        "idBreed": 98,
        "idCrossBreed": 338,
        "client": {
            "id": 6,
            "firstname": "Anne",
            "lastname": "Beguin",
            "female": 1,
            "email": "anne_beguin@yahoo.fr",
            "phone": "+41797758028",
            "street": null,
            "idLocality": null
        },
        "breed": {
            "id": 98,
            "link": "https://www.toutoupourlechien.com/race-de-chien/caniche.html",
            "picture": "https://static.toutoupourlechien.com/2018/02/race-caniche.jpg",
            "noun": "Caniche",
            "idCategory": 9,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 24,
            "maxSizeFemale": 60,
            "minSizeMale": 24,
            "maxSizeMale": 60,
            "minWeightFemale": 2,
            "maxWeightFemale": 25,
            "minWeightMale": 2,
            "maxWeightMale": 25,
            "lifeExpectancy": 13
        },
        "crossbreed": {
            "id": 338,
            "link": null,
            "picture": null,
            "noun": "X",
            "idCategory": null,
            "morphotype": null,
            "classification": null,
            "minSizeFemale": null,
            "maxSizeFemale": null,
            "minSizeMale": null,
            "maxSizeMale": null,
            "minWeightFemale": null,
            "maxWeightFemale": null,
            "minWeightMale": null,
            "maxWeightMale": null,
            "lifeExpectancy": null
        }
    },
    {
        "id": 8,
        "noun": "Titus",
        "female": 0,
        "birthdate": "2018-10-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Gris",
        "dead": 1,
        "idClient": 7,
        "idBreed": 24,
        "idCrossBreed": 338,
        "client": {
            "id": 7,
            "firstname": "Aloïse",
            "lastname": "Hadji",
            "female": 1,
            "email": "aloisehadji@hotmail.com",
            "phone": "+41764175012",
            "street": null,
            "idLocality": 3282
        },
        "breed": {
            "id": 24,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-allemand.html",
            "picture": "https://static.toutoupourlechien.com/2019/05/race-berger-allemand.jpg",
            "noun": "Berger Allemand",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 55,
            "maxSizeFemale": 60,
            "minSizeMale": 60,
            "maxSizeMale": 65,
            "minWeightFemale": 22,
            "maxWeightFemale": 32,
            "minWeightMale": 30,
            "maxWeightMale": 40,
            "lifeExpectancy": 11
        },
        "crossbreed": {
            "id": 338,
            "link": null,
            "picture": null,
            "noun": "X",
            "idCategory": null,
            "morphotype": null,
            "classification": null,
            "minSizeFemale": null,
            "maxSizeFemale": null,
            "minSizeMale": null,
            "maxSizeMale": null,
            "minWeightFemale": null,
            "maxWeightFemale": null,
            "minWeightMale": null,
            "maxWeightMale": null,
            "lifeExpectancy": null
        }
    },
    {
        "id": 9,
        "noun": "Homer",
        "female": 0,
        "birthdate": "2019-02-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Gris",
        "dead": 0,
        "idClient": 8,
        "idBreed": 134,
        "idCrossBreed": null,
        "client": {
            "id": 8,
            "firstname": "Pascale",
            "lastname": "Roulet Mariani",
            "female": 1,
            "email": "prm@citycable.ch",
            "phone": "+41765856320",
            "street": null,
            "idLocality": 3269
        },
        "breed": {
            "id": 134,
            "link": "https://www.toutoupourlechien.com/race-de-chien/chien-d-eau-portugais.html",
            "picture": "https://static.toutoupourlechien.com/2016/03/Race-Chien-dEau-Portugais10.jpg",
            "noun": "Chien d’eau portugais",
            "idCategory": 8,
            "morphotype": "Mésocéphale",
            "classification": "Braccoïde",
            "minSizeFemale": 43,
            "maxSizeFemale": 52,
            "minSizeMale": 50,
            "maxSizeMale": 57,
            "minWeightFemale": 16,
            "maxWeightFemale": 22,
            "minWeightMale": 19,
            "maxWeightMale": 25,
            "lifeExpectancy": 13
        },
        "crossbreed": null
    },
    {
        "id": 10,
        "noun": "Oops",
        "female": 0,
        "birthdate": "2019-08-01",
        "sterilized": 0,
        "chemical": 0,
        "color": "Brun",
        "dead": 0,
        "idClient": 9,
        "idBreed": 43,
        "idCrossBreed": null,
        "client": {
            "id": 9,
            "firstname": "Audrey",
            "lastname": "Beaud",
            "female": 1,
            "email": "audrey.beaud@lacoserv.com",
            "phone": "+41793580834",
            "street": null,
            "idLocality": 3282
        },
        "breed": {
            "id": 43,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-des-shetland.html",
            "picture": "https://static.toutoupourlechien.com/2019/05/race-berger-shetland.jpg",
            "noun": "Berger des Shetland ou Sheltie",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 35,
            "maxSizeFemale": 35,
            "minSizeMale": 37,
            "maxSizeMale": 37,
            "minWeightFemale": 7,
            "maxWeightFemale": 10,
            "minWeightMale": 7,
            "maxWeightMale": 10,
            "lifeExpectancy": 14
        },
        "crossbreed": null
    },
    {
        "id": 11,
        "noun": "Tiama",
        "female": 1,
        "birthdate": "2019-11-01",
        "sterilized": 1,
        "chemical": 0,
        "color": "Gris",
        "dead": 0,
        "idClient": 10,
        "idBreed": 338,
        "idCrossBreed": null,
        "client": {
            "id": 10,
            "firstname": "Emilie",
            "lastname": "Schaeffer",
            "female": 1,
            "email": "schaeffer.emilie@gmail.com",
            "phone": "+41797893093",
            "street": null,
            "idLocality": 3281
        },
        "breed": {
            "id": 338,
            "link": null,
            "picture": null,
            "noun": "X",
            "idCategory": null,
            "morphotype": null,
            "classification": null,
            "minSizeFemale": null,
            "maxSizeFemale": null,
            "minSizeMale": null,
            "maxSizeMale": null,
            "minWeightFemale": null,
            "maxWeightFemale": null,
            "minWeightMale": null,
            "maxWeightMale": null,
            "lifeExpectancy": null
        },
        "crossbreed": null
    },
    {
        "id": 12,
        "noun": "Blue",
        "female": 0,
        "birthdate": "2020-01-01",
        "sterilized": 0,
        "chemical": 0,
        "color": "Blanc",
        "dead": 0,
        "idClient": 11,
        "idBreed": 31,
        "idCrossBreed": null,
        "client": {
            "id": 11,
            "firstname": "Vanessa",
            "lastname": "Ciullo",
            "female": 1,
            "email": null,
            "phone": "+41791023258",
            "street": "Boulevard de la forêt 32",
            "idLocality": 3282
        },
        "breed": {
            "id": 31,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-blanc-suisse.html",
            "picture": "https://static.toutoupourlechien.com/2017/10/race-berger-blanc-suisse.jpg",
            "noun": "Berger blanc suisse",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 53,
            "maxSizeFemale": 61,
            "minSizeMale": 58,
            "maxSizeMale": 66,
            "minWeightFemale": 25,
            "maxWeightFemale": 35,
            "minWeightMale": 30,
            "maxWeightMale": 40,
            "lifeExpectancy": 13
        },
        "crossbreed": null
    },
    {
        "id": 13,
        "noun": "Raku",
        "female": 0,
        "birthdate": "2020-08-13",
        "sterilized": 0,
        "chemical": 0,
        "color": "Blanc",
        "dead": 0,
        "idClient": 12,
        "idBreed": 31,
        "idCrossBreed": null,
        "client": {
            "id": 12,
            "firstname": "Maxime",
            "lastname": "Dauvergne",
            "female": 0,
            "email": null,
            "phone": "+41786133317",
            "street": "Route de Marin 24",
            "idLocality": 3266
        },
        "breed": {
            "id": 31,
            "link": "https://www.toutoupourlechien.com/race-de-chien/berger-blanc-suisse.html",
            "picture": "https://static.toutoupourlechien.com/2017/10/race-berger-blanc-suisse.jpg",
            "noun": "Berger blanc suisse",
            "idCategory": 1,
            "morphotype": "Mésocéphale",
            "classification": "Lupoïde",
            "minSizeFemale": 53,
            "maxSizeFemale": 61,
            "minSizeMale": 58,
            "maxSizeMale": 66,
            "minWeightFemale": 25,
            "maxWeightFemale": 35,
            "minWeightMale": 30,
            "maxWeightMale": 40,
            "lifeExpectancy": 13
        },
        "crossbreed": null
      }
  ]

  constructor( private dogsService: DogsService ) { }

  ngOnInit(): void {
    this.getDogs()
  }

  getDogs(): void {
    this.dogsService.getDogs()
      .subscribe(
        dogs => (this.dogs = dogs),
        err => console.log('HTTP Error', err)
      )
  }
}
