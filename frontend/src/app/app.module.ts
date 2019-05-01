import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './components/AppComponent/app.component';
import { LandingPage } from './components/LandingPage/landing.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { AdminComponent } from './components/AdminComponent/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingPage,
        LoginComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }