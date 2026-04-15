import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    // Limpa o localStorage antes de cada teste
    globalThis.localStorage.clear();
    
    // Mock do location.reload para evitar que o ambiente de teste reinicie
    vi.stubGlobal('location', { reload: vi.fn() });

    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('deve inicializar com o token do localStorage se ele existir', () => {
    globalThis.localStorage.setItem('auth_token', 'token-valido');
    service = TestBed.inject(AuthService);
    
    expect(service.token()).toBe('token-valido');
  });

  it('deve limpar o localStorage e o signal ao executar o logout', () => {
    globalThis.localStorage.setItem('auth_token', 'token-para-apagar');
    service = TestBed.inject(AuthService);

    // Executa o logout
    service.logout();

    // Verifica se os dados foram removidos
    expect(globalThis.localStorage.getItem('auth_token')).toBeNull();
    expect(service.token()).toBeNull();
    
    // Verifica se a página foi "reiniciada" conforme a lógica do serviço
    expect(globalThis.location.reload).toHaveBeenCalled();
  });
});