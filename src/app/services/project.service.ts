import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  _id?: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  year?: number;
  category?: string;
  featured?: boolean;
  highlights?: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = 'http://localhost:5000/api/projects'; // ⚡ backend local

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
}
