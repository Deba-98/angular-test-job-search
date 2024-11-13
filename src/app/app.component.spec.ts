import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule 
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => null } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
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
