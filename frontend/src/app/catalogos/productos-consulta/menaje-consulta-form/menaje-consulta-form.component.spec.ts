import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenajeConsultaFormComponent } from './menaje-consulta-form.component';

describe('MenajeConsultaFormComponent', () => {
  let component: MenajeConsultaFormComponent;
  let fixture: ComponentFixture<MenajeConsultaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenajeConsultaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenajeConsultaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
