import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationService } from './notification';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('deve iniciar com a mensagem null', () => {
    expect(service.message()).toBeNull();
  });

  it('deve atualizar o signal ao chamar show()', () => {
    service.show('Erro na API', 'error');
    expect(service.message()?.message).toBe('Erro na API');
    expect(service.message()?.type).toBe('error');
  });

  it('deve limpar a mensagem ao chamar clear()', () => {
    service.show('Teste');
    service.clear();
    expect(service.message()).toBeNull();
  });

  it('deve limpar automaticamente após 5 segundos', fakeAsync(() => {
    service.show('Auto-limpeza');
    expect(service.message()).not.toBeNull();
    
    tick(5000); // Avança o tempo virtual do teste
    expect(service.message()).toBeNull();
  }));
});