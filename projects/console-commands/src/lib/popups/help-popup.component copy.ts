import { Component, OnInit } from '@angular/core';
import { PopupStateService } from 'console-commands';

@Component({
  selector: 'app-help-popup',
  standalone: true,
  template: `
    <div class="popup" *ngIf="isVisible">
      <div class="popup-header">
        <span>Help</span>
        <button (click)="close()">Close</button>
      </div>
      <div class="popup-body">
        <!-- Help topics content -->
        <p>This is the help section. Here you can find information about the available commands...</p>
      </div>
    </div>
  `,
  styles: [`
    .popup { /* Styles for the popup */ }
    .popup-header { /* Styles for the popup header */ }
    .popup-body { /* Styles for the popup body */ }
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
