import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note.model';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  constructor(private noteService : NoteService) {  }

  ngOnInit() {
    this.noteService.getNotes().then(notes=>this.notes=notes as Note[]);
  }

  onEditItem(i: number){
    this.noteService.startEditing.next(i)
  }

}
