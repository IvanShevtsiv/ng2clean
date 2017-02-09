import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentListItemComponent } from './appointment-list-item/appointment-list-item.component';
import { AppointmentDataService } from './appointment-data.service';
import { AppointmentResolver } from './appointment.resolve';
import { appointments } from './reducers/appointments.reducer';
import { Routing } from './appointment.router';
import { SharedModule } from '../shared/shared.module';
import { selectedAppointment } from './reducers/selected-appointment.reducer';

@NgModule({
  imports: [
    Routing,
    SharedModule,
    StoreModule.provideStore({appointments, selectedAppointment}),
  ],
  providers: [
    AppointmentDataService,
    AppointmentResolver
  ],
  declarations: [
    AppointmentEditComponent,
    AppointmentListComponent,
    AppointmentListItemComponent
  ],
})
export class AppointmentModule { }
