import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NoteService } from '../note.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription'
import { Note } from '../../shared/note.model'

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.css']
})
export class NotesContentComponent implements OnInit, OnDestroy {
  @ViewChild('f') noteForm: NgForm;
  subscription: Subscription;
  edit = false;
  editIndex:number;
  editNote: Note;
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.subscription = this.noteService.startEditing
      .subscribe(
        (index:number)=>{
          this.editIndex = index;
          this.edit = true;
          this.editNote = this.noteService.getNote(index);
          this.noteForm.setValue({
            title: this.editNote.title,
            content: this.editNote.content
          })
        }
      )
  }

  onAddNote(form: NgForm){
    const value = form.value;
    const newNote = new Note(value.title, value.content)
    if(this.edit)
      this.noteService.updateNote(this.editIndex, newNote);
    else
      this.noteService.addNote(newNote);
    this.edit=false;
    form.reset();
  }

  onDelete(){
    this.noteService.deleteNote(this.editIndex);
    this.edit=false;
    this.noteForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
