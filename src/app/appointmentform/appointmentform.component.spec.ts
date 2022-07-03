import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentformComponent } from './appointmentform.component';

describe('AppointmentformComponent', () => {
  let component: AppointmentformComponent;
  let fixture: ComponentFixture<AppointmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
