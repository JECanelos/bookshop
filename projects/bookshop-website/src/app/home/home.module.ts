import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from './home-routing.module';
import { ShopFeaturesComponent } from './shop-features/shop-features.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ShopFeaturesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
