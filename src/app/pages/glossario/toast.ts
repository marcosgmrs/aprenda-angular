import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  imports: []
})
export class ToastComponent {
  protected notificationService = inject(NotificationService);
}