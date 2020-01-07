import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { NavBarComponent } from './nav/navbar.component';
import {
  EventListResolver,
  EventRouteActivator,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService,
} from './events/index';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpVoteComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
