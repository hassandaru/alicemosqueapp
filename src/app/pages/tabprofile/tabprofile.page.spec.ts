import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabprofilePage } from './tabprofile.page';

describe('TabprofilePage', () => {
  let component: TabprofilePage;
  let fixture: ComponentFixture<TabprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
