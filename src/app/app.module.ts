import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './page/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import { AddComponent } from './page/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './page/delete/delete.component';
import { EditComponent } from './page/edit/edit.component';
import { DetailComponent } from './page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
