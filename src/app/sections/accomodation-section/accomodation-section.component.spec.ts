import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationSectionComponent } from './accomodation-section.component';

describe('AccomodationSectionComponent', () => {
  let component: AccomodationSectionComponent;
  let fixture: ComponentFixture<AccomodationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccomodationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccomodationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
