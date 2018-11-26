import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatButtonModule, MatListModule, MatOptionModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import { MatExpansionModule } from '@angular/material';

import { MatFormFieldModule } from '@angular/material';

import { MatInputModule } from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {NoteServiceService} from './services/note-service.service';
import {MatSnackBarModule} from '@angular/material/typings/esm5/snack-bar';
import {AuthService} from './services/auth.service';


const firebaseConfig:any = {
    apiKey: "AIzaSyA9sv2023UMh5NrVKevmADQXnoh3wkzNqo",
    authDomain: "platzinotaswill.firebaseapp.com",
    databaseURL: "https://platzinotaswill.firebaseio.com",
    projectId: "platzinotaswill",
    storageBucket: "platzinotaswill.appspot.com",
    messagingSenderId: "1022258959719"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [NoteServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
