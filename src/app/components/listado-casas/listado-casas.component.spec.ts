import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCasasComponent } from './listado-casas.component';

describe('ListadoCasasComponent', () => {
  let component: ListadoCasasComponent;
  let fixture: ComponentFixture<ListadoCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
