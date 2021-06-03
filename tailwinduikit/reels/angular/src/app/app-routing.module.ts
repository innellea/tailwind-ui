import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryCategoryComponent } from './pages/gallery-category/gallery-category.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery-category', component: GalleryCategoryComponent },
  { path: 'contact', component: ContactComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
