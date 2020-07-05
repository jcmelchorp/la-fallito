import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainComponent } from './core/main/main.component';
import { AdminGuard } from './admin/guard/admin.guard';
import { AdminComponent } from './admin/containers/admin/admin.component';


const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    { path: '', component: MainComponent },
    { path: 'admin-panel', component: AdminComponent, canActivate: [AdminGuard] }
  ]
}, { path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
