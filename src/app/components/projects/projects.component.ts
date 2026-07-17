import { Component, HostListener } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

type Category = 'all' | 'web' | 'mobile' | 'design' | 'other';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
  categories: Category[] = ['all', 'web'];
  selectedCategory: Category = 'all';

  categoryLabels: Record<Category, string> = {
    all: 'All',
    web: 'Web',
    mobile: 'Mobile',
    design: 'Design',
    other: 'Other',
  };

  selectedProject: Project | null = null;

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

  openDetails(p: Project): void {
    this.selectedProject = p;
    document.body.style.overflow = 'hidden';
  }

  closeDetails(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject) {
      this.closeDetails();
    }
  }

  trackById(_i: number, p: Project): string {
    return p.id;
  }
}
