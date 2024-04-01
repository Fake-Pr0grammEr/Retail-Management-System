import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,LoginPage,RegistrationPage],


  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      HttpClientModule],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClient],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
