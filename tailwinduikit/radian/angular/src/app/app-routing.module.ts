import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TeamComponent } from './pages/team/team.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'team', component: TeamComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
