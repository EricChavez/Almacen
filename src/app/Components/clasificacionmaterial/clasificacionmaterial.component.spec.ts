import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionmaterialComponent } from './clasificacionmaterial.component';

describe('ClasificacionmaterialComponent', () => {
  let component: ClasificacionmaterialComponent;
  let fixture: ComponentFixture<ClasificacionmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
