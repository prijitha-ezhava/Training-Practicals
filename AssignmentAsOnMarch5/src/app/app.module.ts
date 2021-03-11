import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeComponentComponent } from './home-component/home-component.component';

import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { TestServiceService } from './test-service.service';
import { MyappRoutingModule } from './myapp-routing.module';
import { TwoWayComponent } from './two-way/two-way.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponentComponent,
   
    ParentToChildComponent,
   
    PipesDemoComponent,
   
    CustomPipesPipe,
   
    AboutUsComponent,
   
    HomeComponent,
   
    TwoWayComponent,
   
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MyappRoutingModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
