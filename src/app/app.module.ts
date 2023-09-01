import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BlogFeaturedComponent } from './components/blog-featured/blog-featured.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepComponent } from './components/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BlogFeaturedComponent,
    GalleryComponent,
    StatisticComponent,
    FooterComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
