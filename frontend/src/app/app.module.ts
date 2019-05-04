import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './components/AppComponent/app.component';
import { LandingPage } from './components/LandingPage/landing.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { SignUpComponent } from './components/SignUpComponent/signup.component';
import { HomeComponent } from './components/HomeComponent/home.component';
import { UserAccountComponent } from './components/UserAccountComponent/user_account.component';
import { AdminComponent } from './components/AdminComponent/admin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './components/CartComponent/cart.component';

@NgModule({
    declarations: [
        CartComponent,
        AdminComponent,
        AppComponent,
        LandingPage,
        LoginComponent,
        SignUpComponent,
        HomeComponent,
        UserAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }