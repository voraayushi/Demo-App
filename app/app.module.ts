import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { SideMenuComponent } from './dashboard/layout/side-menu/side-menu.component'
import {AuthGuard} from './guard/auth.guard';
import {AppRoutingModule} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import {AgmCoreModule} from '@agm/core';
import {FilterPipe} from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    // FilterPipe
      // HeaderComponent,
      // SideMenuComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    HttpModule,
    MatTabsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBZwZkeZmhYoP7ha6GZJYOfH0ZM3XLhHXQ'
    })
  ],
  exports:[MatTabsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
