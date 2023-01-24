import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SessionComponent } from './pages/session/session.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { LoginComponent } from './pages/auth/templates/login/login.component';
import { SignupComponent } from './pages/auth/templates/signup/signup.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { TaxesComponent } from './pages/session/views/taxes/taxes.component';
import { NewsComponent } from './pages/session/views/news/news.component';
import { RegulationComponent } from './pages/session/views/regulation/regulation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SessionComponent,
    ButtonComponent,
    IconComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    SelectComponent,
    TaxesComponent,
    NewsComponent,
    RegulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
