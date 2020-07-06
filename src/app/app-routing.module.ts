import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminGuard } from './admin/guard/admin.guard';
import { AdminComponent } from './admin/containers/admin/admin.component';
import { AboutComponent } from './core/components/about/about.component';
import { UnderConstructionComponent } from './core/components/under-construction/under-construction.component';


const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    { path: '', component: MainComponent },
    { path: 'admin-panel', component: AdminComponent, canActivate: [AdminGuard] },
    {
      path: 'profile',
      loadChildren: () =>
        import('./profile/profile.module').then(
          (m) => m.ProfileModule
        ), canActivate: [AuthGuard]
    }
  ]
},
{ path: 'privacy-policy', component: PrivacyPolicyComponent },
{ path: 'about', component: AboutComponent },
{ path: 'under-construction', component: UnderConstructionComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
