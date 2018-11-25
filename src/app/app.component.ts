import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {NoteServiceService} from './services/note-service.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  title = 'pwa-angular';
  panelOpenState: boolean = false;
  categorias: any = [' trabajo ', ' personal '];
  nota: any = {};
  notas: any = {};

  constructor(public snackBar: MatSnackBar, private swUpdate: SwUpdate, private noteServiceService: NoteServiceService) {
    this.noteServiceService.getNotes().valueChanges().subscribe((fbNotas) => {
      this.notas = fbNotas.reverse();
      console.log("notas:", this.notas);
    });
  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }
  }

  guardarNota() {
    console.log("nota: ", this.nota);
    this.nota.id = Date.now();
    this.noteServiceService.createNota(this.nota).then( () => {
      this.nota = {};

      this.snackBar.open('Nota creada!', null, {
        duration: 2000,
      });
    });
  }

}
