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
  private _empTimeTrackUrl = 'http://localhost:8080/records';
  
      constructor(private _http: HttpClient) { }
  
      getEmpTimeTracks(emailId : string): Observable<IEmployeeTimeTrack[]> {
        
          return this._http.get("http://localhost:8080/records?email="+ emailId +"&length=10")
        
          .do((response: Response) => {
            response.headers.append("Access-Control-Allow-Origin", "*");
                let data = response.json();
                console.log(data);
          })
          .catch(this.handleError);
         
      }
  
       saveEmpTimeTracks(empTimeTrack : IEmployeeTimeTrack) {
         
          return this._http.post('http://localhost:8080/records', empTimeTrack)
            .map((response: Response) => {
                response.headers.append("Access-Control-Allow-Origin", "*");
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