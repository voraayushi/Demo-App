import { NgModule} from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {ThemeComponent} from './theme/theme.component';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../guard/auth.guard';
import {HeaderComponent} from './layout/header/header.component';
import {SideMenuComponent} from './layout/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { MatTabEgComponent } from './pages/mat-tab-eg/mat-tab-eg.component';
import {MatTabsModule} from '@angular/material';
import { CustomTabsComponent } from './pages/custom-tabs/custom-tabs.component';
import { CommonModule } from '@angular/common';
import { CustomAccordionComponent } from './pages/custom-accordion/custom-accordion.component';
import { GoogleMapComponent } from './pages/google-map/google-map.component'; 
import {AgmCoreModule} from '@agm/core';
import { PwdStrengthBarComponent } from './pages/pwd-strength-bar/pwd-strength-bar.component';
import { StrengthBarComponent } from './pages/strength-bar/strength-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchAddComponent } from './pages/search-add/search-add.component';
import {FilterPipe} from '../pipe/filter.pipe'
  const routes: Routes = [{
    path: '',
    component: ThemeComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'home',
        component: HomeComponent,
    },{
        path: 'tab-eg',
        component:MatTabEgComponent,
    },{
        path: 'cust-tag',
        component:CustomTabsComponent,
    },{
        path: 'cust-accor',
        component:CustomAccordionComponent,
    },{
        path: 'google-map',
        component:GoogleMapComponent,
    },{
        path: 'pwd-strength',
        component:PwdStrengthBarComponent,
    },{
        path: 'search',
        component:SearchAddComponent,
    },{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '**',
        component: NotFound404Component
    }],
}];
  
@NgModule({
    imports: [
        LayoutModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey:'AIzaSyDnTFA3Zr1H5Z4k5iQRSyWwaJHdpVctnTk'

        })
    ],
    declarations: [
        HeaderComponent,
        SideMenuComponent,
        ThemeComponent,
        HomeComponent,
        NotFound404Component,
        MatTabEgComponent,
        CustomTabsComponent,
        CustomAccordionComponent,
        GoogleMapComponent,
        PwdStrengthBarComponent,
        StrengthBarComponent,
        SearchAddComponent,
        FilterPipe
        ],
        exports:[]
})
export class DashboardModule{}
