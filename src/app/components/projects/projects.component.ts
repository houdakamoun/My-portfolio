import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'], // ou .scss selon ton choix
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
  categories: Array<'all' | 'web' | 'mobile' | 'design' | 'other'> = [
    'all',
    'web',
    'mobile',
    'design',
    'other',
  ];
  selectedCategory: 'all' | 'web' | 'mobile' | 'design' | 'other' = 'all';

  get featuredProject(): Project | undefined {
    return this.projects.find((p) => p.featured);
  }

  get filteredProjects(): Project[] {
    return this.projects
      .filter((p) => !p.featured)
      .filter((p) =>
        this.selectedCategory === 'all'
          ? true
          : p.category === this.selectedCategory
      );
  }

  selectedProject: Project | null = null; // pour la modale "détails"
  openDetails(p: Project) {
    this.selectedProject = p;
  }
  closeDetails() {
    this.selectedProject = null;
  }

  trackById(_i: number, p: Project) {
    return p.id;
  }
}
