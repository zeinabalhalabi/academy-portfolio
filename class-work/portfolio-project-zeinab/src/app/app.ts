import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { Projects } from './projects/projects';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Profile, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project-zeinab');
}