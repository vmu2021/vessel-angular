import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoConsultarComponent } from './catalogo-consultar.component';

describe('CatalogoConsultarComponent', () => {
  let component: CatalogoConsultarComponent;
  let fixture: ComponentFixture<CatalogoConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
