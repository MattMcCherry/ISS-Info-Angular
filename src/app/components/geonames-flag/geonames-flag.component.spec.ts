import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeonamesFlagComponent } from './geonames-flag.component';

describe('GeonamesFlagComponent', () => {
  let component: GeonamesFlagComponent;
  let fixture: ComponentFixture<GeonamesFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeonamesFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeonamesFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
