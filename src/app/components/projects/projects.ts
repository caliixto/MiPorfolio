import { Component } from '@angular/core';
import { Proyecto } from './project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  openProjectId: string | null = null;

  // Función para cerrar todo el acordeon
  closeAll() {
    this.openProjectId = null;
  }

  toggleProject(id: string) {
    if (this.openProjectId === id) {
      this.closeAll();
    } else {
      this.openProjectId = id;
    }
  }

  project:Proyecto[]=[
    {titulo: 'LandingPage',
      descripcion: "Aplicación full stack de gestión de proyectos desarrollada con Angular y Node.js. Incluye sistema de autenticación con usuarios y contraseñas encriptadas, panel de administración protegido y CRUD completo para crear, editar y eliminar proyectos. Integra almacenamiento de imágenes en la nube con Cloudinary, sistema multidioma (español, inglés y francés mediante JSON) e integración de chatbot de IA. Desplegada en entorno cloud.",
      imagen: '/img/landing.png', demo: 'https://landing-page-pearl-mu-33.vercel.app/', codigo:"https://github.com/caliixto/LandingPage.git", abierto: false},
    {titulo: 'Buscador de GIFs', 
      descripcion: "Aplicación frontend que consume la API de Giphy para buscar y mostrar GIFs en tiempo real. Implementa peticiones HTTP asíncronas y renderizado dinámico de resultados en Angular.",
      imagen: '/img/gifApp.png', demo: 'https://caliixto.github.io/angular-bases/', codigo:"https://github.com/caliixto/angular-bases", abierto: false},
    {titulo: 'GamesPage', descripcion: "Página web de noticias de videojuegos con diseño responsive. Implementa maquetación moderna y estructura optimizada para visualización en distintos dispositivos.",
      imagen: '/img/gamePage.png', demo: 'https://caliixto.github.io/GamesPage', codigo:"https://github.com/caliixto/GamesPage.git", abierto: false },
    {titulo: 'Plantilla Porfolio',
      descripcion: "Plantilla de portfolio web responsive diseñada para presentación de proyectos. Incluye estructura modular y diseño adaptable a distintos dispositivos.",
      imagen: '/img/porfolio.jpg', demo: 'https://caliixto.github.io/EjemploPorfolio/index.html', codigo:"https://github.com/caliixto/EjemploPorfolio.git", abierto: false },
    {titulo: 'Todo-List', descripcion: "Aplicación de gestión de tareas que permite crear, eliminar y organizar tareas. Incluye manejo dinámico del estado y actualización en tiempo real de la interfaz.",
      imagen: '/img/todoList.webp', demo: 'https://caliixto.github.io/todo_list/', codigo:"https://github.com/caliixto/todo_list", abierto: false },
  ]

}
