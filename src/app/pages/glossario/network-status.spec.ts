import { TestBed } from '@angular/core/testing';
import { NetworkStatus } from './network-status';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('NetworkStatus Component', () => {
  let component: NetworkStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NetworkStatus]
    });
    const fixture = TestBed.createComponent(NetworkStatus);
    component = fixture.componentInstance;
  });

  it('deve iniciar com o estado online padrão', () => {
    expect(component.isOnline()).toBe(true);
  });

  it('deve atualizar isOnline para false quando o evento offline disparar', () => {
    // Simula a mudança no objeto nativo
    vi.stubGlobal('navigator', { onLine: false });
    globalThis.dispatchEvent(new Event('offline'));
    
    expect(component.isOnline()).toBe(false);
  });

  it('deve atualizar isOnline para true quando o evento online disparar', () => {
    vi.stubGlobal('navigator', { onLine: true });
    globalThis.dispatchEvent(new Event('online'));
    
    expect(component.isOnline()).toBe(true);
  });
});