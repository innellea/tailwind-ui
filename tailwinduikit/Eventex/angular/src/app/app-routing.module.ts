import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnalyticsComponent } from "./pages/analytics/analytics.component";
import { CalenderComponent } from "./pages/calender/calender.component";
import { CalenderDayViewComponent } from "./pages/calender-day-view/calender-day-view.component";
import { CalenderWeekViewComponent } from "./pages/calender-week-view/calender-week-view.component";
import { EventsComponent } from "./pages/events/events.component";
import { EventsInnerComponent } from "./pages/events-inner/events-inner.component";
import { SalesComponent } from "./pages/sales/sales.component";
import { VirtualEventsSpeakersComponent } from "./pages/virtual-events-speakers/virtual-events-speakers.component";
import { VirtualEventsSponsersComponent } from "./pages/virtual-events-sponsers/virtual-events-sponsers.component";

const routes: Routes = [
    { path: "", component: EventsComponent },
    { path: "analytics", component: AnalyticsComponent },
    { path: "calender", component: CalenderComponent },
    { path: "calender-day-view", component: CalenderDayViewComponent },
    { path: "calender-week-view", component: CalenderWeekViewComponent },
    { path: "events-inner", component: EventsInnerComponent },
    { path: "sales", component: SalesComponent },
    {
        path: "virtual-events-speakers",
        component: VirtualEventsSpeakersComponent,
    },
    {
        path: "virtual-events-sponsers",
        component: VirtualEventsSponsersComponent,
    },
    // otherwise redirect to home
    { path: "**", redirectTo: "" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
