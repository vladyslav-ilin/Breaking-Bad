import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MeterialModule} from "./modules/meterial.module";
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './components/update/update.component';
import { DetailPersonComponent } from './components/detail-person/detail-person.component';
import { StatusPersonComponent } from './components/status-person/status-person.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EditComponent,
    UpdateComponent,
    DetailPersonComponent,
    StatusPersonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MeterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [DetailPersonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
