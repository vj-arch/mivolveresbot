import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyDetailComponent } from './casestudy-detail.component';

describe('CasestudyDetailComponent', () => {
  let component: CasestudyDetailComponent;
  let fixture: ComponentFixture<CasestudyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
