import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { IEmployeeTimeTrack } from './employeetrack';

@Injectable()
export class TimetrackerService {
   
      constructor(private _http: Http) { }
  
    getEmpTimeTracks(emailId : string): Observable<IEmployeeTimeTrack[]> {
        
         return this._http.get("/records?email="+ emailId +"&length=10")
            .map((response: Response) => <IEmployeeTimeTrack[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
         
      }
  
    saveEmpTimeTracks(empTimeTrack : IEmployeeTimeTrack) {
         
          return this._http.post('/records', empTimeTrack)
            .map((response: Response) => {
             if(response.status === 200)
                return 'success'
                
                else
                    return 'failed';
            })
            .catch(this.handleError);;
           
      }
     
  
      private handleError(err: HttpErrorResponse) {
         
          let errorMessage = '';
          if (err.error instanceof Error) {
            
              errorMessage = `An error occurred: ${err.error.message}`;
             
          } else {
            
              errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
             
            }
          console.error(errorMessage);
          return Observable.throw(errorMessage);
      }
  }