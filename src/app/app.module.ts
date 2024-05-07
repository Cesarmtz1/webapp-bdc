import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from "./components/graph/graph/graph.component";
//Primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MeterGroupModule } from 'primeng/metergroup';

@NgModule({
    declarations: [
        AppComponent ,
        GraphComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,

        PanelModule,
        AvatarGroupModule,
        AvatarModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        DropdownModule,
        CalendarModule,
        ChartModule,
        SelectButtonModule,
        MeterGroupModule
    ]
})
export class AppModule { }
