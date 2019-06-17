import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkFonteinenComponent } from './drink-fonteinen/drink-fonteinen.component';
import { DrinkFonteinenMapComponent } from './drink-fonteinen-map/drink-fonteinen-map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path:'', component: HomeComponent},
                        { path:'lijst', component: DrinkFonteinenComponent},
                        { path:'map', component: DrinkFonteinenMapComponent},
                        { path:'contact', component: ContactComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
