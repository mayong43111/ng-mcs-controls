import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons.module';
import { NgMCSControlsModule } from '../../components/ng-mcs-controls.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AppCommonModule } from './common';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        IconsModule,
        NgbModule.forRoot(),
        NgMCSControlsModule.forRoot(),
        AppCommonModule,
        AppRoutingModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }