import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotersComponent } from './toters.component';

describe('TotersComponent', () => {
  let component: TotersComponent;
  let fixture: ComponentFixture<TotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
