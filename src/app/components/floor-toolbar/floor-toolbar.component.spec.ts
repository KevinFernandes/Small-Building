import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorToolbarComponent } from './floor-toolbar.component';

describe('FloorToolbarComponent', () => {
  let component: FloorToolbarComponent;
  let fixture: ComponentFixture<FloorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
