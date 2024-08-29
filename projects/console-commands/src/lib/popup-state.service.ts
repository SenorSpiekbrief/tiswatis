import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupStateService {
  private showHelpPopup$ = new BehaviorSubject<boolean>(false);
  private showChatPopup$ = new BehaviorSubject<boolean>(false);
  private showConfigPopup$ = new BehaviorSubject<boolean>(false);

  // Observables for popup visibility
  getHelpPopupState(): Observable<boolean> {
    return this.showHelpPopup$.asObservable();
  }

  getChatPopupState(): Observable<boolean> {
    return this.showChatPopup$.asObservable();
  }

  getConfigPopupState(): Observable<boolean> {
    return this.showConfigPopup$.asObservable();
  }

  // Methods to control popup visibility
  openHelpPopup() {
    this.showHelpPopup$.next(true);
  }

  closeHelpPopup() {
    this.showHelpPopup$.next(false);
  }

  openChatPopup() {
    this.showChatPopup$.next(true);
  }

  closeChatPopup() {
    this.showChatPopup$.next(false);
  }

  openConfigPopup() {
    this.showConfigPopup$.next(true);
  }

  closeConfigPopup() {
    this.showConfigPopup$.next(false);
  }
}
