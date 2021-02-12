import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialSlotComponent } from './residential-slot.component';

describe('ResidentialSlotComponent', () => {
  let component: ResidentialSlotComponent;
  let fixture: ComponentFixture<ResidentialSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
