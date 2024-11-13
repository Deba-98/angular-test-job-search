import { Component, OnInit } from '@angular/core';
import { Job, JobService } from '../../services/job-serve.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

  toggleFavorite(job: Job): void {
    const isFavorite = this.isFavorite(job);
    if (isFavorite) {
      this.jobService.removeFavorite(job.id);
    } else {
      this.jobService.addFavorite(job);
    }
  }
  
   isFavorite(job: Job): boolean {
    return this.jobService.getFavorites().some(fav => fav.id === job.id);
  }
 
  
}
