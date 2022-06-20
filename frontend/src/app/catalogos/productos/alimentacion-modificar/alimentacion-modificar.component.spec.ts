import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionModificarComponent } from './alimentacion-modificar.component';

describe('AlimentacionModificarComponent', () => {
  let component: AlimentacionModificarComponent;
  let fixture: ComponentFixture<AlimentacionModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
