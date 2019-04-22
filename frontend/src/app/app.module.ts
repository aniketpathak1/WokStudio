import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './components/AppComponent/app.component';
import { LandingPage } from './components/LandingPage/landing.component';
import { LoginComponent } from './components/LoginComponent/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingPage,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }