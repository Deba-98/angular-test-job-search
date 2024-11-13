import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DETAILED } from '../mocks';

export interface Job {
  id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  reference: string;
  location: string;
  industries: string[];
  types: string[];
  publishDate: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private favoritesKey = 'favoriteJobs';

  constructor() {}

  getJobs(): Observable<Job[]> {
    const jobsArray = Object.values(DETAILED) as Job[];
    return of(jobsArray);
  }

  getJobById(jobId: number): Observable<Job> {
    const job = DETAILED[jobId];
    return of(job as Job);
  }

  getFavorites(): Job[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(job: Job): void {
    const favorites = this.getFavorites();
    favorites.push(job);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  removeFavorite(jobId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(job => job.id !== jobId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }
}
