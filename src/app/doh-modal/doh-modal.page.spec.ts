import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOHModalPage } from './doh-modal.page';

describe('DOHModalPage', () => {
  let component: DOHModalPage;
  let fixture: ComponentFixture<DOHModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOHModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOHModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
