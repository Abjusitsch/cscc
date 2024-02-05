// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
})
export class AppModule {
    ngDoBootstrap(app) {
        app.bootstrap(AppComponent);
    }
}
