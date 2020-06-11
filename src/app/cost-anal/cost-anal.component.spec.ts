import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostAnalComponent } from './cost-anal.component';

describe('CostAnalComponent', () => {
  let component: CostAnalComponent;
  let fixture: ComponentFixture<CostAnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostAnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostAnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
