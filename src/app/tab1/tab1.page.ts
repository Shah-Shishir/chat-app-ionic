import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  private router = inject(Router);

  constructor() {}

  signOut() {
    localStorage.clear();
    this.router.navigate(['/enter-chatroom'], { replaceUrl: true });
  }
}
