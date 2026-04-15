import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { httpErrorInterceptor } from './http-error';
import { NotificationService } from '../../services/notification';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('httpErrorInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let notification: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpErrorInterceptor])),
        provideHttpClientTesting(),
        NotificationService
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    notification = TestBed.inject(NotificationService);
  });

  it('deve disparar notificação de erro de conexão quando status for 0', () => {
    const spy = vi.spyOn(notification, 'show');

    // Faz uma chamada que vai falhar
    httpClient.get('/api/test').subscribe({
      error: () => {} // Evita erro não tratado no teste
    });

    const req = httpMock.expectOne('/api/test');
    req.error(new ProgressEvent('Network error'), { status: 0 });

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Servidor inacessível'), 'error', 'Tentar de novo', expect.any(Function));
  });
});