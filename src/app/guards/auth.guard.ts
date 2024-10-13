import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { NavController } from '@ionic/angular';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const navCtrl = inject(NavController);

  const username = storageService.get(storageService.keys.USERNAME);

  if (!username) {
    navCtrl.navigateForward('/enter-chatroom');
  }

  return !!username;
};
