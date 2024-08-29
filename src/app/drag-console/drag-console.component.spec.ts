import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableConsoleComponent } from './drag-console.component';

describe('DragConsoleComponent', () => {
  let component: DraggableConsoleComponent;
  let fixture: ComponentFixture<DraggableConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableConsoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
