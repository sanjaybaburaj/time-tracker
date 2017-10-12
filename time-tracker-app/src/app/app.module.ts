import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HttpClientModule } from "@angular/common/http";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DateTimePickerModule} from 'ngx-datetime-picker';


import { AppComponent } from './app.component';
import { TimeTrackerListComponent } from './tracker/time-tracker-list.component';
import { TimeTrackerRecordComponent } from './tracker/time-tracker-record.component';
import { TimetrackerService } from './tracker/timetracker.service';


@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerListComponent,
    TimeTrackerRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    DateTimePickerModule
  ],
  providers: [TimetrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
