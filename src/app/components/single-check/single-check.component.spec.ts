import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCheckComponent } from './single-check.component';

describe('SingleCheckComponent', () => {
  let component: SingleCheckComponent;
  let fixture: ComponentFixture<SingleCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
