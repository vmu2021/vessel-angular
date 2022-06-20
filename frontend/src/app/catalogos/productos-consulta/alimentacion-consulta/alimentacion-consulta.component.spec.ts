import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionConsultaComponent } from './alimentacion-consulta.component';

describe('AlimentacionConsultaComponent', () => {
  let component: AlimentacionConsultaComponent;
  let fixture: ComponentFixture<AlimentacionConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
