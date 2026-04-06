import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaCard } from './aula-card';

describe('AulaCard', () => {
  let component: AulaCard;
  let fixture: ComponentFixture<AulaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
