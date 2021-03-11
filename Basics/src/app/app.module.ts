import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyTestServiceService } from './my-test-service.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyTestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
