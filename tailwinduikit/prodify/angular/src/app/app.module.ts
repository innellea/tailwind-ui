import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourByFourGridWithGradientBackgroComponent } from './components/four-by-four-grid-with-gradient-backgro/four-by-four-grid-with-gradient-backgro.component';
import { AlternatingDescriptionWithCardsComponent } from './components/alternating-description-with-cards/alternating-description-with-cards.component';
import { GradientWithLargeTitleAndSearchComponent } from './components/gradient-with-large-title-and-search/gradient-with-large-title-and-search.component';
import { LargeTextWithGradientNameComponent } from './components/large-text-with-gradient-name/large-text-with-gradient-name.component';
import { LargeTypographyWithGradientAndGlassEffectComponent } from './components/large-typography-with-gradient-and-glass-effect/large-typography-with-gradient-and-glass-effect.component';
import { LeftAlignedLinksWithGradientComponent } from './components/left-aligned-links-with-gradient/left-aligned-links-with-gradient.component';
import { MinimalCardsWithHeadingAndIconComponent } from './components/minimal-cards-with-heading-and-icon/minimal-cards-with-heading-and-icon.component';
import { RightAlignedAvatarsWithGradientComponent } from './components/right-aligned-avatars-with-gradient/right-aligned-avatars-with-gradient.component';
import { SimpleBoldTextComponent } from './components/simple-bold-text/simple-bold-text.component';
import { SimpleCenterAlignedWithLogoComponent } from './components/simple-center-aligned-with-logo/simple-center-aligned-with-logo.component';
import { SimpleColoredLogosComponent } from './components/simple-colored-logos/simple-colored-logos.component';
import { VericalCardsWithBoldNumberComponent } from './components/verical-cards-with-bold-number/verical-cards-with-bold-number.component';
import { VericalCardsWithBoldNumberingComponent } from './components/verical-cards-with-bold-numbering/verical-cards-with-bold-numbering.component';
import { VericalCardsWithBoldNumberingTwoComponent } from './components/verical-cards-with-bold-numbering-two/verical-cards-with-bold-numbering-two.component';
import { VerticalCardsWithGradientHeadComponent } from './components/vertical-cards-with-gradient-head/vertical-cards-with-gradient-head.component';
import { VideoWithMessageFromAPersonComponent } from './components/video-with-message-from-a-person/video-with-message-from-a-person.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcesArticleComponent } from './pages/resources-article/resources-article.component';
import { ResourcesInnerComponent } from './pages/resources-inner/resources-inner.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutHeadingComponent } from './components/about-heading/about-heading.component';
import { PricingHeadingComponent } from './components/pricing-heading/pricing-heading.component';
@NgModule({
    declarations: [
        AppComponent,
        FourByFourGridWithGradientBackgroComponent,
        AlternatingDescriptionWithCardsComponent,
        GradientWithLargeTitleAndSearchComponent,
        LargeTextWithGradientNameComponent,
        LargeTypographyWithGradientAndGlassEffectComponent,
        LeftAlignedLinksWithGradientComponent,
        MinimalCardsWithHeadingAndIconComponent,
        RightAlignedAvatarsWithGradientComponent,
        SimpleBoldTextComponent,
        SimpleCenterAlignedWithLogoComponent,
        SimpleColoredLogosComponent,
        VericalCardsWithBoldNumberComponent,
        VericalCardsWithBoldNumberingComponent,
        VericalCardsWithBoldNumberingTwoComponent,
        VerticalCardsWithGradientHeadComponent,
        VideoWithMessageFromAPersonComponent,
        IndexComponent,
        AboutComponent,
        PricingComponent,
        ResourcesComponent,
        ResourcesArticleComponent,
        ResourcesInnerComponent,
        HeaderComponent,
        AboutHeadingComponent,
        PricingHeadingComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
