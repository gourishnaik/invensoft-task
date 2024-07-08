import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'dashboard-page',component:DashboardPageComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'view-book',component:ViewBooksComponent},
  {path:'delete-user',component:DeleteUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
