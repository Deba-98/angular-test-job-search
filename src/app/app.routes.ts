import { Routes } from '@angular/router';
import { FavoriteListComponent } from '../pages/favorite-list/favorite-list.component';
import { JobDetailsComponent } from '../pages/job-details/job-details.component';
import { JobListComponent } from '../pages/job-list/job-list.component';

export const appRoutes: Routes = [
  { path: '**', redirectTo: 'jobs', pathMatch: 'full' },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'favorites', component: FavoriteListComponent },
  { path: 'jobs/:jobId', component: JobDetailsComponent }
];
