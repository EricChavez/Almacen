import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionArticuloComponent } from './clasificacion-articulo.component';

describe('ClasificacionArticuloComponent', () => {
  let component: ClasificacionArticuloComponent;
  let fixture: ComponentFixture<ClasificacionArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
