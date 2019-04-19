import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmapPage } from './tabmap.page';

describe('TabmapPage', () => {
  let component: TabmapPage;
  let fixture: ComponentFixture<TabmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
