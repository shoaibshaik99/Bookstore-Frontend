import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FetchAllBooksComponent } from './components/fetch-all-books/fetch-all-books.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:DashboardComponent,
    children:[{path:'',redirectTo:'/home/books',pathMatch:'full'},
      {path:'books', component:FetchAllBooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
