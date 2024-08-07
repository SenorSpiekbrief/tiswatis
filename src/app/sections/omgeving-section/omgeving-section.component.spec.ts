import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmgevingSectionComponent } from './omgeving-section.component';

describe('OmgevingSectionComponent', () => {
  let component: OmgevingSectionComponent;
  let fixture: ComponentFixture<OmgevingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmgevingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmgevingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
