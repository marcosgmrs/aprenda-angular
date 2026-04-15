import { Component, signal, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-network-status',
  standalone: true,
  templateUrl: './network-status.html',
  styleUrl: './network-status.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkStatus {
  // Inicia com o estado atual do navegador
  isOnline = signal<boolean>(globalThis.navigator?.onLine ?? true);

  private updateStatus = () => {
    this.isOnline.set(navigator.onLine);
  };

  ngOnInit() {
    globalThis.addEventListener('online', this.updateStatus);
    globalThis.addEventListener('offline', this.updateStatus);
  }

  ngOnDestroy() {
    globalThis.removeEventListener('online', this.updateStatus);
    globalThis.removeEventListener('offline', this.updateStatus);
  }
}