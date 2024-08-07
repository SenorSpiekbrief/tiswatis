import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarievenSectionComponent } from './tarieven-section.component';

describe('TarievenSectionComponent', () => {
  let component: TarievenSectionComponent;
  let fixture: ComponentFixture<TarievenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarievenSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarievenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
