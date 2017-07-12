import { Injectable } from '@angular/core';
import { Note } from '../shared/note.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
  noteChanged = new EventEmitter<Note[]>();
  startEditing = new Subject<number>();

  constructor(private http: Http, ) { }
  notes: Note[] = [new Note("sampleTile", "sampleDescription")];

  getNotes():Promise<Note[]>{
    const url = 'https://angular-notes-7bb5c.firebaseio.com/notes.json';
    return this.http.get(url)
      .toPromise()
      .then(response => this.notes = response.json() as Note[]? response.json():[]);
  }

  storeNotes(){
    return this.http.put('https://angular-notes-7bb5c.firebaseio.com/notes.json', this.notes)
    .toPromise()
    .then(response => response.json() as Note[])
  }

  getNote(i: number){
    return this.notes[i];
  }

  addNote(note: Note){
    this.notes.push(note);
    this.storeNotes();
  }

  updateNote(i: number, newNote){
    this.notes[i] = newNote;
    this.storeNotes();
  }

  deleteNote(i:number){
    this.notes.splice(i,1);
    this.storeNotes();
  }
}
