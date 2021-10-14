import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual-Component/manual-components';
import { UpperComponentComponent } from './upper-component/upper-component.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
import { LowerComponentComponent } from './lower-component/lower-component.component';
import { CenterInlineComponentComponent } from './center-inline-component/center-inline-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    UpperComponentComponent,
    MiddleComponentComponent,
    LowerComponentComponent,
    CenterInlineComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
