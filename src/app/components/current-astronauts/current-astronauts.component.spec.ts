import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAstronautsComponent } from './current-astronauts.component';

describe('CurrentAstronautsComponent', () => {
  let component: CurrentAstronautsComponent;
  let fixture: ComponentFixture<CurrentAstronautsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAstronautsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAstronautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
