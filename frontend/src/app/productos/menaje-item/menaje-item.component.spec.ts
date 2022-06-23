import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenajeItemComponent } from './menaje-item.component';

describe('MenajeItemComponent', () => {
  let component: MenajeItemComponent;
  let fixture: ComponentFixture<MenajeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenajeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenajeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
