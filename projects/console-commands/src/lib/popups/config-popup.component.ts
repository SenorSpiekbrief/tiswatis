import { Component, Output, EventEmitter } from '@angular/core';
import { PopupStateService } from 'console-commands';

@Component({
  selector: 'app-config-popup',
  standalone: true,
  template: `
    <div class="popup">
      <div class="popup-header">
        <span>Settings</span>
        <button (click)="close()">Close</button>
      </div>
      <div class="popup-body">
        <!-- Add settings UI here -->
        <p>Change general site settings...</p>
      </div>
    </div>
  `,
  styles: [`
    .popup { /* Styles for the popup */ }
    .popup-header { /* Styles for the popup header */ }
    .popup-body { /* Styles for the popup body */ }
  `]
})
export class ConfigPopupComponent {
  isVisible = false;

  constructor(private popupStateService: PopupStateService) {}

  ngOnInit() {
    // Subscribe to the help popup visibility state
    this.popupStateService.getConfigPopupState().subscribe(state => {
      this.isVisible = state;
    });
  }

  close() {
    this.popupStateService.closeConfigPopup();
  }
}
