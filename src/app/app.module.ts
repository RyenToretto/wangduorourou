import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestModuleModule} from './test-module/test-module.module';
import {FormsModule} from '@angular/forms';
import {FirstNgLibModule} from '@kjf/first-ng-lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

        FirstNgLibModule,

        TestModuleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
