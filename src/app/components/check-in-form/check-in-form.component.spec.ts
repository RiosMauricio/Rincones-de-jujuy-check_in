import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInFormComponent } from './check-in-form.component';

describe('CheckInFormComponent', () => {
  let component: CheckInFormComponent;
  let fixture: ComponentFixture<CheckInFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
