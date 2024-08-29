import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleCommandsComponent } from './console-commands.component';

describe('ConsoleCommandsComponent', () => {
  let component: ConsoleCommandsComponent;
  let fixture: ComponentFixture<ConsoleCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleCommandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsoleCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
