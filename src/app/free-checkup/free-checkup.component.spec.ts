import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCheckupComponent } from './free-checkup.component';

describe('FreeCheckupComponent', () => {
  let component: FreeCheckupComponent;
  let fixture: ComponentFixture<FreeCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCheckupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
