import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProjectsComponent,
    TestimonialsComponent,
    TeamComponent,
    WorkComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
