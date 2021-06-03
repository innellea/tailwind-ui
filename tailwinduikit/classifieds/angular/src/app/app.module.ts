import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchInnerComponent } from './pages/search-inner/search-inner.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [AppComponent, IndexComponent, ChatsComponent, SearchComponent, SearchInnerComponent, SearchResultsComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
