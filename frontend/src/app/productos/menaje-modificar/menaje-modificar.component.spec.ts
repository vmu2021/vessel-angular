import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenajeModificarComponent } from './menaje-modificar.component';

describe('MenajeModificarComponent', () => {
  let component: MenajeModificarComponent;
  let fixture: ComponentFixture<MenajeModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenajeModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenajeModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
