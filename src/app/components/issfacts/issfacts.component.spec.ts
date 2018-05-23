import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssfactsComponent } from './issfacts.component';

describe('IssfactsComponent', () => {
  let component: IssfactsComponent;
  let fixture: ComponentFixture<IssfactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssfactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
