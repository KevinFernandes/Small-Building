import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorSlotBarComponent } from './floor-slot-bar.component';

describe('FloorSlotBarComponent', () => {
  let component: FloorSlotBarComponent;
  let fixture: ComponentFixture<FloorSlotBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorSlotBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorSlotBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
