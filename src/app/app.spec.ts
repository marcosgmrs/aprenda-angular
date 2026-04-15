import { TestBed } from '@angular/core/testing';
import { App, AppNotification } from './app';
import { NotificationService } from './services/notification';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, AppNotification],
      providers: [NotificationService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, aprenda-angular');
  });

  it('AppNotification deve exibir a mensagem correta do Signal', () => {
    const fixture = TestBed.createComponent(AppNotification);
    const service = TestBed.inject(NotificationService);
    const element = fixture.nativeElement as HTMLElement;

    // 1. Inicialmente não deve haver toast
    fixture.detectChanges();
    expect(element.querySelector('.toast')).toBeNull();

    // 2. Atualiza o signal através do serviço
    service.show('Mensagem de Sucesso', 'success');
    fixture.detectChanges();

    // 3. Verifica se o HTML refletiu a mudança
    const toast = element.querySelector('.toast');
    expect(toast).not.toBeNull();
    expect(toast?.textContent).toContain('Mensagem de Sucesso');
    expect(toast?.classList.contains('success')).toBe(true);
  });
});
