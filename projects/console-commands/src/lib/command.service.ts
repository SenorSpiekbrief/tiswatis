import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private commandOutputs$ = new BehaviorSubject<string[]>([]);

  constructor() {}

  // Function to execute commands
  executeCommand(command: string) {
    const outputs = this.commandOutputs$.value;
    outputs.push(`> ${command}`);
    const commandLower = command.toLowerCase();

    switch (commandLower) {
      case 'help':
        outputs.push('Opening help popup...');
        break;
      case 'chat':
        outputs.push('Opening chat popup...');
        break;
      case 'config':
        outputs.push('Opening config popup...');
        break;
      case 'mine':
        outputs.push('Mining started...');
        this.mineBlock(outputs);
        break;
      case 'clear':
        this.commandOutputs$.next([]);
        return;
      default:
        outputs.push(`Unknown command: ${command}`);
        break;
    }

    this.commandOutputs$.next(outputs);
  }

  // Function to mine a block (simulate blockchain process)
  private mineBlock(outputs: string[]) {
    setTimeout(() => {
      outputs.push('Block mined successfully!');
      this.commandOutputs$.next(outputs);
    }, 5000); // Simulate a delay for mining
  }

  // Getter for command outputs as observable
  getCommandOutputs() {
    return this.commandOutputs$.asObservable();
  }
}