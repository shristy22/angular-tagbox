import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {DemoMaterialModule} from './material';
import { MatButtonModule } from "@angular/material/button";
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,DemoMaterialModule,MatButtonModule,MatTableModule,
    MatSortModule,OrderModule,NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/checkLists',
        pathMatch: 'full'
    },
    {
        path: 'checkLists',
        component: LandingPageComponent
    },
    {
      path: 'reports',
      component: LandingPageComponent
  },
  {
    path: 'manageVendors',
    component: LandingPageComponent
},
    ]),
    BrowserAnimationsModule,FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
