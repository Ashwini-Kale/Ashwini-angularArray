import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { FunnyComponent } from './funny/funny.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    FunnyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
