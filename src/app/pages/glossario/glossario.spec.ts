import { TestBed } from '@angular/core/testing';
import { Glossario } from './glossario';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Glossario Component - Data Integrity', () => {
  let component: Glossario;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Glossario]
    });
    const fixture = TestBed.createComponent(Glossario);
    component = fixture.componentInstance;
  });

  it('deve garantir que todos os termos tenham a propriedade tecnologia preenchida corretamente', () => {
    const termos = component.termos();
    
    termos.forEach(termo => {
      expect(termo.tecnologia, `O termo "${termo.termo}" está sem a propriedade tecnologia definida.`).toBeDefined();
      expect(['Angular', 'TypeScript', 'Geral']).toContain(termo.tecnologia);
    });
  });
});