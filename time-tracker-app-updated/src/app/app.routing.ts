import { Routes, RouterModule } from '@angular/router';

import { TimeTrackerListComponent } from './tracker/time-tracker-list.component';
import { TimeTrackerRecordComponent } from './tracker/time-tracker-record.component';

const appRoutes: Routes = [
  { path: 'timetracker', component: TimeTrackerListComponent },
    { path: 'timerecorder', component: TimeTrackerRecordComponent }
];

export const routing = RouterModule.forRoot(appRoutes);