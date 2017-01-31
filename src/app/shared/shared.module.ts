import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Bootstrap imports
import { AlertModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ModalModule } from 'ng2-bootstrap/modal';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { TooltipModule } from 'ng2-bootstrap/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    DatepickerModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: []
})
export class SharedModule {}
