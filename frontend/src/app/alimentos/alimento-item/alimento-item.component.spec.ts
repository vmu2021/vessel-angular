import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoItemComponent } from './alimento-item.component';

describe('AlimentoItemComponent', () => {
  let component: AlimentoItemComponent;
  let fixture: ComponentFixture<AlimentoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
