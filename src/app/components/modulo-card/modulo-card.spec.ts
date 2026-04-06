import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCard } from './modulo-card';

describe('ModuloCard', () => {
  let component: ModuloCard;
  let fixture: ComponentFixture<ModuloCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuloCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
