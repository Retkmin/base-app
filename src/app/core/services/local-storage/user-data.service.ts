import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { LocalStorageData } from '../../models/localStorage';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public localStorage: LocalStorageData =  new LocalStorageData();
  private storageSubject = new BehaviorSubject<string[]>([]);
  public localStorage$ = this.storageSubject.asObservable();

  constructor() {
    this.updateStorageFromLocalStorage();
  }

  private updateStorageFromLocalStorage(): void {
    const keys = Object.keys(localStorage);
    this.storageSubject.next(keys);
  }

  public getKeys(): Observable<string[]> {
    return this.storageSubject.asObservable();
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.updateStorageFromLocalStorage();
  }

  public getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
    this.updateStorageFromLocalStorage();
  }

  public clear(): void {
    localStorage.clear();
    this.updateStorageFromLocalStorage();
  }
}

