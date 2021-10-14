import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { AttributeComponentComponent } from './attribute-component/attribute-component.component';
import { ClassComponentComponent } from './class-component/class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    AttributeComponentComponent,
    ClassComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
