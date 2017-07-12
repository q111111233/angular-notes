import { Injectable,EventEmitter } from '@angular/core';
import { Feature } from './feature.model';
import { NoteService } from '../notes/note.service';
import { Note } from '../shared/note.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeatureService {
  featureChanged = new Subject<Feature[]>()
  featureSelected = new EventEmitter<Feature>();
  constructor(private http: Http, private noteService: NoteService) { }
  features: Feature[]=[];
  setFeatures(features:Feature[]){
    return this.features=features;
  }
  getFeature(): Promise<Feature[]>{
    const url = 'https://angular-notes-7bb5c.firebaseio.com/feature.json';
    return this.http.get(url)
      .toPromise()
      .then(response => this.features = response.json() as Feature[]? response.json():[]);
  }

  storeFeature(){
    return this.http.put('https://angular-notes-7bb5c.firebaseio.com/feature.json', this.features)
    .toPromise()
    .then(response => response.json() as Feature[])
  }

  getAFeature(index: number){
    return this.features[index];
  }

  changeToNote(feature: Feature){
    this.noteService.addNote(new Note(feature.title, feature.description));
  }

  addFeature(feature: Feature){
    this.features.push(feature);
    this.storeFeature();
  }

  updateFeature(i:number, newFeature: Feature){
    this.features[i] = newFeature;
    this.storeFeature();
  }

  deleteFeature(i:number){
    this.features.splice(i,1);
    this.storeFeature();
  }

}
