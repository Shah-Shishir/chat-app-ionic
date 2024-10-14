import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  const user = storageService.get(storageService.keys.USER);

  if (!user) {
    router.navigate(['/enter-chatroom'], { replaceUrl: true });
  }

  return !!user;
};
