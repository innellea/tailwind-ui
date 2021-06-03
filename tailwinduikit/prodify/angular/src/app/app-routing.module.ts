import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcesArticleComponent } from './pages/resources-article/resources-article.component';
import { ResourcesInnerComponent } from './pages/resources-inner/resources-inner.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'resources-article', component: ResourcesArticleComponent },
    { path: 'resources-inner', component: ResourcesInnerComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
