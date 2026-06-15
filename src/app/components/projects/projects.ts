import { Component } from '@angular/core';
import { Proyecto } from './project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  project:Proyecto[]=[
    { titulo: 'Buscador de GIFs', 
      descripcion: "Aplicación web que permite buscar y mostrar GIFs animados usando la API de Giphy.",
      imagen: '/img/project-1.jpg', demo: 'https://caliixto.github.io/angular-bases/', codigo:"https://github.com/caliixto/angular-bases", abierto: false},

    { titulo: 'Todo-List', descripcion: "Aplicación web que permite agregar y eliminar tareas segun el calendario.",
      imagen: '/img/project-2.jpg', demo: 'https://caliixto.github.io/todo_list/', codigo:"https://github.com/caliixto/todo_list", abierto: false },
    { titulo: 'Ejemplo Porfolio',
      descripcion: "Plantilla adaptable para usar de porfolio.",
      imagen: '/img/project-3.jpg', demo: 'https://caliixto.github.io/EjemploPorfolio/index.html', codigo:"https://github.com/caliixto/EjemploPorfolio.git", abierto: false },
    { titulo: 'LandingPage',
     descripcion: "Pagina de presentacion moderna  pensada para destacar proyectos.",
      imagen: '/img/project-4.jpg', demo: 'https://landing-page-pearl-mu-33.vercel.app/', codigo:"https://github.com/caliixto/LandingPage.git", abierto: false},
    { titulo: 'GamesPage', descripcion: "Pagina de noticias de videojuegos con diseño responsive.",
     imagen: '/img/project-5.jpg', demo: 'https://caliixto.github.io/GamesPage', codigo:"https://github.com/caliixto/GamesPage.git", abierto: false },
  ]

}
