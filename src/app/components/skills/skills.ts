import { Component } from '@angular/core';
import { Skill } from './skill.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  currentFilter:string = "todas";

  skills: Skill[] = [
    // Lenguajes
    { name: 'HTML', image: '/img/html.png', category: 'lenguaje' },
    { name: 'CSS', image: '/img/css.webp', category: 'lenguaje' },
    { name: 'JavaScript', image: '/img/js.png', category: 'lenguaje' },
    { name: 'TypeScript', image: '/img/typescript.png', category: 'lenguaje' },
    { name: 'SQL', image: '/img/sql.png', category: 'lenguaje' },
    
    // Frameworks y Entornos (Backend)
    { name: 'Angular', image: '/img/angular.png', category: 'framework' },
    { name: 'Node.js', image: '/img/node.png', category: 'framework' },
    
    // Bases de Datos
    { name: 'MongoDB', image: '/img/mongo.jpg', category: 'base-datos' },
    
    // Herramientas y Librerías
    { name: 'Git', image: '/img/git.png', category: 'herramienta' },
    { name: 'SweetAlert2', image: '/img/sweetalert2.png', category: 'libreria' }
  ];

  displaySkills = this.skills;

  filter (category:string){
    this.currentFilter = category;
    if (category == "todas"){
      this.displaySkills = this.skills;
    }else{
      this.displaySkills = this.skills.filter(s=> s.category==category);
    }
  }
}
