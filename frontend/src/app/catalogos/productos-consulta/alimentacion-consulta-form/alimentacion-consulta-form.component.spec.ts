import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionConsultaFormComponent } from './alimentacion-consulta-form.component';

describe('AlimentacionConsultaFormComponent', () => {
  let component: AlimentacionConsultaFormComponent;
  let fixture: ComponentFixture<AlimentacionConsultaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionConsultaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionConsultaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
