import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FeatureService } from '../feature/feature.service';
import { Feature } from '../feature/feature.model'

@Injectable()
export class DataStorageService{
  constructor(private http: Http, private featureService: FeatureService) {
  }
  storeFeature(){
    return this.http.put('https://angular-notes-7bb5c.firebaseio.com/feature.json', this.featureService.getFeature());
  }

  getFeature(){
     this.http.get('https://angular-notes-7bb5c.firebaseio.com/feature.json').subscribe(
      (response:Response) => {
        const features: Feature[] = response.json();
        this.featureService.setFeatures(features);
      }
    );console.log(this.featureService.features);
  }

}
