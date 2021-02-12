import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSlotComponent } from './business-slot.component';

describe('BusinessSlotComponent', () => {
  let component: BusinessSlotComponent;
  let fixture: ComponentFixture<BusinessSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
