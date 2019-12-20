import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyListCardComponent } from './casestudy-list-card.component';

describe('CasestudyListCardComponent', () => {
  let component: CasestudyListCardComponent;
  let fixture: ComponentFixture<CasestudyListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
