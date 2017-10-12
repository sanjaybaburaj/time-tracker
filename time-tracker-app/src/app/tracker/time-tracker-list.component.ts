import { Component, OnInit } from '@angular/core';
import { TimetrackerService } from './timetracker.service';
import { IEmployeeTimeTrack } from './employeetrack';

@Component({
  selector: 'app-time-tracker-list',
  templateUrl: './time-tracker-list.component.html',
  styleUrls: ['./time-tracker-list.component.css']
})
export class TimeTrackerListComponent  {

  constructor(private recorderService : TimetrackerService) { }
  
  pageTitle : string = 'Employee Track Records';
  email :string;
  errorMessage: string;
  empTimeTracks: IEmployeeTimeTrack[] = [];




submit(){

    this.recorderService.getEmpTimeTracks(this.email)
                  .subscribe(empTimeTracks => {
                      this.empTimeTracks = empTimeTracks;
                    
                  },
      error => this.errorMessage ='No Records Available');
    }
}
