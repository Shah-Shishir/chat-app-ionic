import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';

// Models
import { User } from 'src/app/models/user';
import { EnterChatroomPayload } from 'src/app/models/payloads/enter-chatroom-payload';

@Component({
  selector: 'app-enter-chatroom',
  templateUrl: './enter-chatroom.page.html',
  styleUrls: ['./enter-chatroom.page.scss'],
})
export class EnterChatroomPage {
  form: FormGroup;
  loading: boolean = false;
  isToastOpen: boolean = false;
  toastMessage: string = '';

  private readonly userService = inject(UserService);
  private readonly storageService = inject(StorageService);
  private readonly router = inject(Router);

  constructor() {
    this.form = new FormGroup({
      username: new FormControl(''),
    });
  }

  enterChatroom(): void {
    this.loading = true;
    this.form.disable();

    const payload: EnterChatroomPayload = {
      username: this.form.get('username')?.value,
    };

    this.userService.enterChatRoom(payload).subscribe({
      next: (res: User) => {
        localStorage.setItem(
          this.storageService.keys.USER,
          JSON.stringify({
            id: res.id,
            username: res.username,
          })
        );
        
        this.toastMessage = 'Chat opened successfully';
        
        setTimeout(() => {
          this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
        });
      },
      error: (err) => {
        this.toastMessage = err.message;
        this.form.enable();
      },
      complete: () => {
        this.loading = false;
        this.setOpen(true);
      },
    });
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
