import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommandService, HelpPopupComponent, ConfigPopupComponent, ChatPopupComponent } from 'console-commands'; // Import from the named library



@Component({
  selector: 'app-draggable-console',
  standalone: true,
  templateUrl: './drag-console.component.html',
  styleUrls: ['./drag-console.component.scss'],
  imports: [NgFor, NgIf, FormsModule, DragDropModule, HelpPopupComponent, ConfigPopupComponent, ChatPopupComponent],
})
export class DraggableConsoleComponent {
  isVisible = false;
  isMinimized = false;
  commandInput = '';
  commandOutputs: string[] = [];

  private keysPressed: Set<string> = new Set();

  constructor(private commandService: CommandService) {
    // Subscribe to command outputs from the service
    this.commandService.getCommandOutputs().subscribe((outputs: any) => {
      this.commandOutputs = outputs;
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.keysPressed.add(event.key.toLowerCase());
    // Detect the key combination, e.g., 'Ctrl + Shift + C'
    if (this.keysPressed.has('control') && this.keysPressed.has('shift') && this.keysPressed.has('c')) {
      this.toggleVisibility();
      this.keysPressed = new Set();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.keysPressed.delete(event.key.toLowerCase());
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  executeCommand() {
    if (this.commandInput.trim()) {
      this.commandService.executeCommand(this.commandInput); // Use the service to execute commands
      this.commandInput = '';
    }
  }
}
