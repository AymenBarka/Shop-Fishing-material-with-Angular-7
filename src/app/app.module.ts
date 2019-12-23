import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FishingRodsComponent } from './fishing-rods/fishing-rods.component';
import { FishingLineComponent } from './fishing-line/fishing-line.component';
import { FishingReelsComponent } from './fishing-reels/fishing-reels.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserIdleModule } from 'angular-user-idle';



// Add OwlModule to imports at below section

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    FishingRodsComponent,
    FishingLineComponent,
    FishingReelsComponent,
    FooterComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    ReactiveFormsModule,
    UserIdleModule.forRoot({idle: 3, timeout: 5, ping: 120}),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
