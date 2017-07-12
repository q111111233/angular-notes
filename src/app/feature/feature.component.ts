import { Component, OnInit } from '@angular/core';
import { FeatureService } from './feature.service'
import { Feature } from './feature.model'

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  selectedFeature: Feature;
  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.featureService.featureSelected.subscribe(
      (feature: Feature) =>{
        this.selectedFeature = feature;
      }
    )
  }

}
