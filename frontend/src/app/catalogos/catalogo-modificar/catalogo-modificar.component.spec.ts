import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoModificarComponent } from './catalogo-modificar.component';

describe('CatalogoModificarComponent', () => {
  let component: CatalogoModificarComponent;
  let fixture: ComponentFixture<CatalogoModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
