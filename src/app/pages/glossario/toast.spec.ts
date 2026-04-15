import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast';
import { NotificationService } from '../../services/notification';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let service: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [NotificationService]
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('deve chamar clear() do serviço ao clicar no botão fechar', () => {
    // Arrange: Simula uma mensagem ativa para o botão aparecer
    service.show('Mensagem de teste');
    fixture.detectChanges();
    
    const spy = vi.spyOn(service, 'clear');
    const button = fixture.nativeElement.querySelector('.close-btn');
    
    // Act
    button.click();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});