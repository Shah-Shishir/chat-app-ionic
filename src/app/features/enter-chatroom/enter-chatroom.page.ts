import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enter-chatroom',
  templateUrl: './enter-chatroom.page.html',
  styleUrls: ['./enter-chatroom.page.scss'],
})
export class EnterChatroomPage {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl(''),
    });
  }
}
