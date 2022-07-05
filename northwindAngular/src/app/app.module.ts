import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { SearchComponent } from './components/home-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { VatCalculatorComponent } from './components/home-area/vat-calculator/vat-calculator.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { ColorsService } from './services/colors.service';
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/products-area/product-card/product-card.component';

@NgModule({
    declarations: [ // Module components
        LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, ProductListComponent, AboutComponent, PageNotFoundComponent, SearchComponent, VatCalculatorComponent, DiscountComponent, ProductCardComponent
    ],
    imports: [ // Which other Modules we need to know so we could use their components and other commands
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [ // Which components we want to export outside of this module, so any other module could use it
    ],
    // providers: [ColorsService], // Create ColorsService object for the entire app
    bootstrap: [LayoutComponent] // Initial component placed inside index.html
})
export class AppModule { }
