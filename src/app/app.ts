import { Component, HostBinding } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, About, Contact, Projects, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @HostBinding('class.dark') isDark = false;
}
