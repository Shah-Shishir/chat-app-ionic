import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly _storage: Storage | null = null;

  public keys = {
    USERNAME: 'Username',
  };

  public set(key: string, value: any) {
    this._storage?.setItem(key, value);
  }

  public get(key: string) {
    return this._storage?.getItem(key);
  }

  public clear() {
    this._storage?.clear();
  }
}
