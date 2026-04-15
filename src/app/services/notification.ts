import { Injectable, signal, effect, untracked } from '@angular/core';

export interface ToastMessage {
  message: string;
  type: 'error' | 'success' | 'info';
  actionLabel?: string;
  action?: () => void;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  // Signal privado para controle interno
  private messageSignal = signal<ToastMessage | null>(null);
  
  // Exposição somente leitura para os componentes
  message = this.messageSignal.asReadonly();

  constructor() {
    // O efeito monitora mudanças no sinal de mensagem
    effect((onCleanup) => {
      const currentMessage = this.messageSignal();
      
      if (currentMessage) {
        const timer = setTimeout(() => {
          untracked(() => this.clear());
        }, 5000);

        onCleanup(() => clearTimeout(timer));
      }
    });
  }

  show(message: string, type: ToastMessage['type'] = 'error', actionLabel?: string, action?: () => void) {
    this.messageSignal.set({ message, type, actionLabel, action });
  }

  clear() {
    this.messageSignal.set(null);
  }
}