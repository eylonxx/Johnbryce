import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { VatCalculatorComponent } from './components/home-area/vat-calculator/vat-calculator.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ProductListComponent,
    AboutComponent,
    PageNotFoundComponent,
    SearchComponent,
    VatCalculatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
