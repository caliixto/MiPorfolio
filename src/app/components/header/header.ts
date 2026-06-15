import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isDarkMode = false;

  ngOnInit() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    this.isDarkMode = true;
    document.body.classList.add('dark');
  }
}

scrollTo(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    
    // Accedemos al DOM de forma segura (Angular prefiere Renderer2, pero esto funciona)
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

}
