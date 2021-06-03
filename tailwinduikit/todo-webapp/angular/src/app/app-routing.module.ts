import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarDayViewComponent } from './pages/calendar-day-view/calendar-day-view.component';
import { CalendarMonthViewComponent } from './pages/calendar-month-view/calendar-month-view.component';
import { CalendarWeekViewComponent } from './pages/calendar-week-view/calendar-week-view.component';
import { ImportantComponent } from './pages/important/important.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { IndexComponent } from './pages/index/index.component';
import { NotebookComponent } from './pages/notebook/notebook.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ProjectFilesComponent } from './pages/project-files/project-files.component';
import { ProjectLinksComponent } from './pages/project-links/project-links.component';
import { ProjectNotesComponent } from './pages/project-notes/project-notes.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
    { path: 'calendar-day-view', component: CalendarDayViewComponent },
    { path: 'calendar-month-view', component: CalendarMonthViewComponent },
    { path: 'calendar-week-view', component: CalendarWeekViewComponent },
    { path: 'important', component: ImportantComponent },
    { path: 'inbox', component: InboxComponent },
    { path: '', component: IndexComponent },
    { path: 'notebook', component: NotebookComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'project-files', component: ProjectFilesComponent },
    { path: 'project-links', component: ProjectLinksComponent },
    { path: 'project-notes', component: ProjectNotesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-todos', component: TodosComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
