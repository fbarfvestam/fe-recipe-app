import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';
import { SecureComponent } from './secure/secure.component';
import { RecipelistComponent } from './secure/recipelist/recipelist.component';

@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    RecipelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
