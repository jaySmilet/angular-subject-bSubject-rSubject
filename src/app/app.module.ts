import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { C1Component } from './main/c1/c1.component';
import { MainComponent } from './main/main.component';
import { C2Component } from './main/c2/c2.component';
import { C3Component } from './main/c3/c3.component';
import { CommonModule } from '@angular/common';
import { RsComponent } from './rs/rs.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    C1Component,
    C2Component,
    C3Component,
    MainComponent,
    RsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
