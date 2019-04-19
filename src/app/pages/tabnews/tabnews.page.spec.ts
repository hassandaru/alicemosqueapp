import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabnewsPage } from './tabnews.page';

describe('TabnewsPage', () => {
  let component: TabnewsPage;
  let fixture: ComponentFixture<TabnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabnewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
