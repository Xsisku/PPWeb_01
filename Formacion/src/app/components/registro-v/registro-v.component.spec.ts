import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVComponent } from './registro-v.component';

describe('RegistroVComponent', () => {
  let component: RegistroVComponent;
  let fixture: ComponentFixture<RegistroVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
