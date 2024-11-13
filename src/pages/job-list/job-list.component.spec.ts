import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobListComponent } from './job-list.component';
import { JobService } from '../../services/job-serve.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobListComponent, // Importa il componente se è standalone
        HttpClientTestingModule // Aggiunto per simulare HttpClient nel JobService
      ],
      providers: [
        JobService, // Aggiungi il servizio JobService
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => 123 } }, // Mock di ActivatedRoute con un jobId simulato
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobListComponent);
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
