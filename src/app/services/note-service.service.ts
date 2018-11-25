import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(public afDB: AngularFireDatabase) { }

  public getNotes() {
    return this.afDB.list('/notes');
  }

  public getNota(id) {
    return this.afDB.object('/notes/' + id);
  }

  public createNota(note) {
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }

  public editNota(note) {
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }

  public deleteNote(note) {
    return this.afDB.database.ref('notes').child(note.id).remove();
  }

}
