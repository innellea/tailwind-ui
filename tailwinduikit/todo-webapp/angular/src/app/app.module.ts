import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarDayViewComponent } from './pages/calendar-day-view/calendar-day-view.component';
import { CalendarMonthViewComponent } from './pages/calendar-month-view/calendar-month-view.component';
import { CalendarWeekViewComponent } from './pages/calendar-week-view/calendar-week-view.component';
import { ImportantComponent } from './pages/important/important.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { IndexComponent } from './pages/index/index.component';
import { NotebookComponent } from './pages/notebook/notebook.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectFilesComponent } from './pages/project-files/project-files.component';
import { ProjectLinksComponent } from './pages/project-links/project-links.component';
import { ProjectNotesComponent } from './pages/project-notes/project-notes.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesComponent } from './pages/notes/notes.component';

@NgModule({
    declarations: [IndexComponent, AppComponent, CalendarDayViewComponent, CalendarMonthViewComponent, CalendarWeekViewComponent, ImportantComponent, InboxComponent, NotebookComponent, ProjectsComponent, ProjectFilesComponent, ProjectLinksComponent, ProjectNotesComponent, TodosComponent, SidebarComponent, NotesComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
