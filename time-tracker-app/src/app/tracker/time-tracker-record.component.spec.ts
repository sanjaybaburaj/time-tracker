import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerRecordComponent } from './time-tracker-record.component';

describe('TimeTrackerRecordComponent', () => {
  let component: TimeTrackerRecordComponent;
  let fixture: ComponentFixture<TimeTrackerRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
