import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DishOfDayComponent } from './components/dish-of-day/dish-of-day.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    DishOfDayComponent,
    HeroComponent,
    MenuViewComponent,
    ReservationComponent,
    ServicesComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
