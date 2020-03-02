import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  constructor() { }

  show(header: string, body: string, type: 'template1' | 'template2', image?: string, delay?: number) {
    this.toasts = [
      ...this.toasts,
      {
        header: header,
        body: body,
        delay: delay || 5000,
        image: image || '',
        type: type || 'template1'
      }
    ];
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
