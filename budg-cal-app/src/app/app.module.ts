import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormComponent } from './form/form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListCardComponent } from './item-list/item-list-card/item-list-card.component';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotFoundPageComponent,
    FormComponent,
    ItemListComponent,
    ItemListCardComponent,
    EditItemModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [EditItemModelComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
