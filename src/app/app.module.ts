import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { from } from "rxjs";
import {ProductComponent} from './products/product.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HomeComponent, ProductComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
