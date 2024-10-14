import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public keys = {
    USER: 'User',
    USERNAME: 'Username',
  };

  public set(key: string, value: any): void {
    localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    );
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key) ?? 'null');
  }

  public remove(key: string): any {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
