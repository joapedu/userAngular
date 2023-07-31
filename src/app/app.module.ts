import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrBreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { BrFooterComponent } from "./footer/footer.component";
import { BrHeaderComponent } from "./header/header.component";
import { BrMenuComponent } from "./menu/menu.component";
import { BrSelectComponent } from "./select/select.component";

@NgModule({
  declarations: [
    AppComponent,
    BrBreadcrumbComponent,
    BrFooterComponent,
    BrHeaderComponent,
    BrMenuComponent,
    BrSelectComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
