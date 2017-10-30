import {Component} from '@angular/core'
import { TimetrackerService } from './timetracker.service';
import { IEmployeeTimeTrack } from './employeetrack';

@Component({
  selector: 'app-time-tracker-record',
  templateUrl: './time-tracker-record.component.html',
  styleUrls: ['./time-tracker-record.component.css']
})
export class TimeTrackerRecordComponent {

 emptimetrack : IEmployeeTimeTrack;
 msgAlert :string;
  errorMessage: string;

   constructor(private recorderService : TimetrackerService) {
this.emptimetrack = new IEmployeeTimeTrack();

   }
 submit(){
console.log(this.emptimetrack)
this.recorderService.saveEmpTimeTracks(this.emptimetrack)
              .subscribe(result => {
                  
                if(result == 'success')
                  this.msgAlert ='Record save successfully';
                },
              
   error => this.errorMessage = 'An error occured, Please try later ...');
  
}
}
