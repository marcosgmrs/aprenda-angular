import { Component, inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { Navbar } from './components/navbar/navbar';
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { NotificationService } from './services/notification';
import { NetworkStatus } from './pages/glossario/network-status';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  template: `
    @if (notification.message(); as msg) {
      <div class="toast {{ msg.type }}">
        {{ msg.message }}
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNotification {
  protected notification = inject(NotificationService);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Breadcrumbs, AppNotification, NetworkStatus],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('200ms ease-in', style({ opacity: 0, transform: 'scale(1.02) translateY(-10px)' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms 100ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class App {
  protected themeService = inject(ThemeService);
}
