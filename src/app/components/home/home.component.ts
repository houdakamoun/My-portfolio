import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  featuredProject: Project | undefined = PROJECTS.find((p) => p.featured);

  skills = [
    'Angular',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'HTML/CSS',
    'Figma',
    'WordPress',
  ];
}
