import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { BrBreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { BrFooterComponent } from "./footer/footer.component";
import { BrHeaderComponent } from "./header/header.component";
import { BrMenuComponent } from "./menu/menu.component";
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BrBreadcrumbComponent,
    BrFooterComponent,
    BrHeaderComponent,
    BrMenuComponent,
    HomeComponent,
    SobreComponent,
    DetalhesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
