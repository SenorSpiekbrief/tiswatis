import { Component, OnInit } from '@angular/core';
import { PopupStateService } from '../popup-state.service';

@Component({
  selector: 'app-help-popup',
  standalone: true,
  template: `
      @if(isVisible) {
        <div class="console-window">
            <div class="console-header">
              <span>Help</span>
              <button (click)="close()">Close</button>
            </div>
            <div class="popup-body">
              <!-- Help topics content -->
              <p>This is the help section. Here you can find information about the available commands...</p>
            </div>
        </div>
      }
  `,
  styles: [`
    .console-window {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 600px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
    resize: both;
    overflow: auto;
    z-index: 1000; /* Ensure it's on top of other content */
  }
  
  .console-header {
    padding: 5px;
    background-color: #333;
    cursor: move;
    display: flex;
    justify-content: space-between;
  }
  
  .console-body {
    padding: 10px;
    background-color: #1e1e1e;
  }
  
  .console-body .output {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  
  .console-window.minimized .console-body {
    display: none;
  }
  
  `]
})
export class HelpPopupComponent implements OnInit {
  isVisible = false;

  constructor(private popupStateService: PopupStateService) {}

  ngOnInit() {
    // Subscribe to the help popup visibility state
    this.popupStateService.getHelpPopupState().subscribe(state => {
      this.isVisible = state;
    });
  }

  close() {
    this.popupStateService.closeHelpPopup();
  }
}
