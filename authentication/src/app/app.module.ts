import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { LoginComponent } from './vistas/login/login.component';
import { RegisterComponent } from './vistas/register/register.component';
import { InfoComponent } from './vistas/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './vistas/toolbar/toolbar.component';
import { SendEmailComponent } from './vistas/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InfoComponent,
    ToolbarComponent,
    SendEmailComponent
  ],
  entryComponents: [RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
