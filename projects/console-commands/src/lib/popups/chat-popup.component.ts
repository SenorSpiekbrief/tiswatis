import { Component, Output, EventEmitter } from '@angular/core';
import { PopupStateService } from 'console-commands';

@Component({
  selector: 'app-chat-popup',
  standalone: true,
  template: `
    <div class="popup">
      <div class="popup-header">
        <span>Chat with AI</span>
        <button (click)="close()">Close</button>
      </div>
      <div class="popup-body">
        <!-- Add chat functionality here -->
        <p>Start a conversation with our AI assistant...</p>
      </div>
    </div>
  `,
  styles: [`
    .popup { /* Styles for the popup */ }
    .popup-header { /* Styles for the popup header */ }
    .popup-body { /* Styles for the popup body */ }
  `],
  imports: [NgIf]
})
export class ChatPopupComponent {
  isVisible = false;

  constructor(private popupStateService: PopupStateService) {}

  ngOnInit() {
    // Subscribe to the help popup visibility state
    this.popupStateService.getChatPopupState().subscribe(state => {
      this.isVisible = state;
    });
  }

  close() {
    this.popupStateService.closeChatPopup();
  }
}
