import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HeaderComponent } from './tutorials/header/header.component';
import { TutorialAddComponent } from './tutorials/tutorial-add/tutorial-add.component';
import { TutorialListsComponent } from './tutorials/tutorial-lists/tutorial-lists.component';
import { TutorialItemComponent } from './tutorials/tutorial-item/tutorial-item.component';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingSpinnerComponent } from './tutorials/loading-spinner/loading-spinner.component';
import { TutorialStartComponent } from './tutorials/tutorial-start/tutorial-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorialAddComponent,
    TutorialListsComponent,
    TutorialItemComponent,
    TutorialDetailsComponent,
    NotFoundComponent,
    TutorialsComponent,
    LoadingSpinnerComponent,
    TutorialStartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
