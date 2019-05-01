import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/LoginComponent/login.component';
import { LandingPage } from '../components/LandingPage/landing.component';
import { AdminComponent } from '../components/AdminComponent/admin.component';
import { SignUpComponent } from '../components/SignUpComponent/signup.component';
import { HomeComponent } from '../components/HomeComponent/home.component';
import { UserAccountComponent } from '../components/UserAccountComponent/user_account.component';

const routes: Routes = [
    { 
      path: 'login', 
      component: LoginComponent 
    },
    { 
        path: 'signup', 
        component: SignUpComponent
    },
    { 
        path: 'home', 
        component: HomeComponent
    },
    { 
        path: 'user_account', 
        component: UserAccountComponent
    },
    {
        path:'LandingPage',
        component: LandingPage
    },
    { 
        path: '', 
        redirectTo: 'LandingPage', 
        pathMatch: 'full'
    }, 
    {
        path: 'admin',
        component: AdminComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
  
export class AppRoutingModule {}