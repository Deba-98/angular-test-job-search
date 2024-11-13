import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailsComponent } from './job-details.component';
import { JobService } from '../../services/job-serve.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobDetailsComponent, 
        HttpClientTestingModule 
      ],
      providers: [
        JobService, 
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (key: string) => 123 } }, 
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Per avviare gli unit test decommentare la seguente funzione e commentare la funzione successiva.
   * Per avviare i test end to end lasciare invariato.
   *   
  it('should create', () => {
    expect(component).toBeTruthy(); // Usa Jasmine per i test con ng test
  });
   */

  it('should be created', () => {
    expect(component).to.exist;;
  });
});
