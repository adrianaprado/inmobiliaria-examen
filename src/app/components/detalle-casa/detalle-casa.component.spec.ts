import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCasaComponent } from './detalle-casa.component';

describe('DetalleCasaComponent', () => {
  let component: DetalleCasaComponent;
  let fixture: ComponentFixture<DetalleCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
