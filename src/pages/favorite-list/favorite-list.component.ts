import { Component, OnInit } from '@angular/core';
import { Job, JobService } from '../../services/job-serve.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.favoriteJobs = this.jobService.getFavorites();
  }
  
  toggleFavorite(job: Job): void {
    this.jobService.removeFavorite(job.id);
    this.favoriteJobs = this.favoriteJobs.filter(fav => fav.id !== job.id);
  }  
}
