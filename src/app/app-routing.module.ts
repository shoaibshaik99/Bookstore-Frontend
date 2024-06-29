import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FetchAllBooksComponent } from './components/fetch-all-books/fetch-all-books.component';
import { FetchEachBookComponent } from './components/fetch-each-book/fetch-each-book.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard} from './Auth/auth.guard';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  //{path:'book',component:FetchEachBookComponent},
  {path:'home',component:DashboardComponent,
    children:[{path:'',redirectTo:'/home/books',pathMatch:'full'},
      {path:'books', component:FetchAllBooksComponent},
      {path:'book/:id',component:FetchEachBookComponent},
      {path:'cart', component:CartComponent, canActivate:[AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
