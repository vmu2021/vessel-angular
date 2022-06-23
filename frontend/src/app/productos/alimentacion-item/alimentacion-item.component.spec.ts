import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionItemComponent } from './alimentacion-item.component';

describe('AlimentacionItemComponent', () => {
  let component: AlimentacionItemComponent;
  let fixture: ComponentFixture<AlimentacionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
