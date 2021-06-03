import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ThreeCardsWithYellowHoverComponent } from './components/three-cards-with-yellow-hover/three-cards-with-yellow-hover.component';
import { ThreeColCardStyleWithSliderComponent } from './components/three-col-card-style-with-slider/three-col-card-style-with-slider.component';
import { ThreeColWithYellowCirclesComponent } from './components/three-col-with-yellow-circles/three-col-with-yellow-circles.component';
import { BlobStyleFourColComponent } from './components/blob-style-four-col/blob-style-four-col.component';
import { BlobStyleWithTwoButtonsComponent } from './components/blob-style-with-two-buttons/blob-style-with-two-buttons.component';
import { BlueBackgroundWithYellowSphereComponent } from './components/blue-background-with-yellow-sphere/blue-background-with-yellow-sphere.component';
import { RightAlignedWithSearchbarComponent } from './components/right-aligned-with-searchbar/right-aligned-with-searchbar.component';
import { LargeSectionWithBlobImageComponent } from './components/large-section-with-blob-image/large-section-with-blob-image.component';
import { SimpleCardsWithElevatedHoverComponent } from './components/simple-cards-with-elevated-hover/simple-cards-with-elevated-hover.component';
import { SimpleTextWithYellowBlobComponent } from './components/simple-text-with-yellow-blob/simple-text-with-yellow-blob.component';

@NgModule({
    declarations: [AppComponent, ThreeCardsWithYellowHoverComponent, LargeSectionWithBlobImageComponent, ThreeColCardStyleWithSliderComponent, ThreeColWithYellowCirclesComponent, BlobStyleFourColComponent, BlobStyleWithTwoButtonsComponent, BlueBackgroundWithYellowSphereComponent, RightAlignedWithSearchbarComponent, SimpleCardsWithElevatedHoverComponent, SimpleTextWithYellowBlobComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
