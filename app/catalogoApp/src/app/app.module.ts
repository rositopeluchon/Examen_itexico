import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProfileComponent} from './profile/profile.component';
import { TableComponent } from './table/table.component';
import {ConvertToSpacePipe} from './shares/convert-to-space'
import {DescriptionComponent} from './shares/description.component';

import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './table/table.service';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TableComponent,
    ConvertToSpacePipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
