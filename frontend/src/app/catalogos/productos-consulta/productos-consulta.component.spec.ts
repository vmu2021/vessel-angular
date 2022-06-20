import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosConsultaComponent } from './productos-consulta.component';

describe('ProductosConsultaComponent', () => {
  let component: ProductosConsultaComponent;
  let fixture: ComponentFixture<ProductosConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
