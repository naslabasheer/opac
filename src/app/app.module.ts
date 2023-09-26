import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {NgxPaginationModule, PaginatePipe} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule}from '@angular/material/button-toggle'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';

import { MatTableModule } from '@angular/material/table';
import { ShowMoreLessComponent } from './show-more-less/show-more-less.component';
import {MatDialogModule} from '@angular/material/dialog'
import { MatDialogActions } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ShowMoreLessComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    ReactiveFormsModule,
   
  
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

  }
 
