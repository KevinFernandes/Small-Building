import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialModalComponent } from './residential-modal.component';

describe('ResidentialModalComponent', () => {
  let component: ResidentialModalComponent;
  let fixture: ComponentFixture<ResidentialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
