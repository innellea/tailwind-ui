import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchInnerComponent } from './pages/search-inner/search-inner.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ChatsComponent } from './pages/chats/chats.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search-inner', component: SearchInnerComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'chat', component: ChatsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
