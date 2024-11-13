import { TestBed } from '@angular/core/testing';

import { JobService } from './job-serve.service';

describe('JobServeService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
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
    expect(service).to.exist;;
  });
});
