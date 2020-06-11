import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSchComponent } from './maintenance-sch.component';

describe('MaintenanceSchComponent', () => {
  let component: MaintenanceSchComponent;
  let fixture: ComponentFixture<MaintenanceSchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
