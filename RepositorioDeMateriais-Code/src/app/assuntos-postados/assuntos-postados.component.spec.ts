import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosPostadosComponent } from './assuntos-postados.component';

describe('AssuntosPostadosComponent', () => {
  let component: AssuntosPostadosComponent;
  let fixture: ComponentFixture<AssuntosPostadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntosPostadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntosPostadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
