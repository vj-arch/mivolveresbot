import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyAddComponent } from './casestudy-add.component';

describe('CasestudyAddComponent', () => {
  let component: CasestudyAddComponent;
  let fixture: ComponentFixture<CasestudyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
