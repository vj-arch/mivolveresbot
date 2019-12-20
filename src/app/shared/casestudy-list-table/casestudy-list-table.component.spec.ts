import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyListTableComponent } from './casestudy-list-table.component';

describe('CasestudyListTableComponent', () => {
  let component: CasestudyListTableComponent;
  let fixture: ComponentFixture<CasestudyListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
