import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPateintComponent } from './add-pateint.component';

describe('AddPateintComponent', () => {
  let component: AddPateintComponent;
  let fixture: ComponentFixture<AddPateintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPateintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPateintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
