import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const route: Routes = [
//   { path: 'pages', loadChildren: './dashboard/dashboard.module#DashboardModule' },
//   { path: '', redirectTo: 'pages', pathMatch: 'full' },
//   { path: '**', redirectTo: 'pages' },
// ]

const route: Routes = [
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }