import { Component, OnInit} from '@angular/core';
import {Feature } from '../feature.model';
import { NoteService } from '../../notes/note.service';
import { Note } from '../../shared/note.model';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent implements OnInit {
  feature: Feature;
  id: number;
  notes: Note[];
  constructor(private noteService: NoteService,
              private featureService: FeatureService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) =>{
          this.id = +params['id'];
            this.feature = this.featureService.getAFeature(this.id)
        }
      )
  }

  onChangeToNote(){
    if(this.validation(new Note(this.feature.title, this.feature.description),
        this.noteService.notes
      )
    )
    this.noteService.addNote(new Note(this.feature.title, this.feature.description));
  }

  validation(note:Note, notes:Note[]){
    for(let n of notes){
        if (n.title === note.title&&n.content===note.content){
          return false;
        }
    }
    return true;
  }

  onDelete(){
    this.featureService.deleteFeature(this.id);
    this.router.navigate(['/feature'])
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

}
