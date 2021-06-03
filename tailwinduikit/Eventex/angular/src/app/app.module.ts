import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CalenderDayViewComponent } from './pages/calender-day-view/calender-day-view.component';
import { CalenderWeekViewComponent } from './pages/calender-week-view/calender-week-view.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { EventsInnerComponent } from './pages/events-inner/events-inner.component';
import { EventsComponent } from './pages/events/events.component';
import { SalesComponent } from './pages/sales/sales.component';
import { VirtualEventsSpeakersComponent } from './pages/virtual-events-speakers/virtual-events-speakers.component';
import { VirtualEventsSponsersComponent } from './pages/virtual-events-sponsers/virtual-events-sponsers.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, AnalyticsComponent, CalenderDayViewComponent, CalenderWeekViewComponent, CalenderComponent, EventsInnerComponent, EventsComponent, SalesComponent, VirtualEventsSpeakersComponent, VirtualEventsSponsersComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
