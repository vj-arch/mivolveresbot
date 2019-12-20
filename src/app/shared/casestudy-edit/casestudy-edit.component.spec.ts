import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyEditComponent } from './casestudy-edit.component';

describe('CasestudyEditComponent', () => {
  let component: CasestudyEditComponent;
  let fixture: ComponentFixture<CasestudyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
