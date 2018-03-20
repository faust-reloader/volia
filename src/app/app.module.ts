import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './404/404.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { KokanComponent } from './kokan/kokan.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [ AppRoutingModule, BrowserModule, SharedModule ],
  declarations: [
    PageNotFoundComponent,
    ContactComponent,
    AppComponent,
    KokanComponent,
    LinesComponent,
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
