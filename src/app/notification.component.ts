import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (notification.message(); as msg) {
      <div class="toast {{ msg.type }}">
        {{ msg.message }}
      </div>
    }
  `,
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  protected notification = inject(NotificationService);
}
