import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenajeConsultaComponent } from './menaje-consulta.component';

describe('MenajeConsultaComponent', () => {
  let component: MenajeConsultaComponent;
  let fixture: ComponentFixture<MenajeConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenajeConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenajeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
