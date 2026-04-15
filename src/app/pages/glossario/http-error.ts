import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, retry, timer } from 'rxjs';
import { NotificationService } from '../../services/notification';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);

  return next(req).pipe(
    retry({
      count: 1,
      delay: (error: HttpErrorResponse) => {
        // Se for falha de rede (status 0), espera 1 segundo e tenta de novo
        if (error.status === 0) {
          return timer(1000);
        }
        // Se for erro de servidor (404, 500, etc), não tenta de novo e lança o erro
        throw error;
      }
    }),
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro inesperado';

      if (error.error instanceof ErrorEvent) {
        // Erro no lado do cliente (ex: rede fora do ar)
        errorMessage = `Erro: ${error.error.message}`;
      } else if (error.status === 0) {
        // Erro de Conexão/Timeout
        errorMessage = 'Servidor inacessível ou tempo de conexão esgotado.';
        notification.show(errorMessage, 'error', 'Tentar de novo', () => location.reload());
        return throwError(() => new Error(errorMessage));
      } else {
        // Erro retornado pela API (status code)
        switch (error.status) {
          case 401:
            errorMessage = 'Sessão expirada. Faça login novamente.';
            break;
          case 403:
            errorMessage = 'Você não tem permissão para acessar este recurso.';
            break;
          case 404:
            errorMessage = 'O recurso solicitado não foi encontrado.';
            break;
          case 500:
            errorMessage = 'Erro interno no servidor da API.';
            break;
        }
      }

      // Dispara a notificação visual via Signal
      notification.show(errorMessage, 'error');
      
      return throwError(() => new Error(errorMessage));
    })
  );
};