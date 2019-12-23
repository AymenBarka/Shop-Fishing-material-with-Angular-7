import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { FishingRodsComponent } from './fishing-rods/fishing-rods.component';
import { FishingReelsComponent } from './fishing-reels/fishing-reels.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'about',component:AboutComponent},{path:'accueil',component:AccueilComponent},{path:'contact',component:ContactComponent},{path:'fishing-rods',component:FishingRodsComponent},{path:'fishing-reels',component:FishingReelsComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
