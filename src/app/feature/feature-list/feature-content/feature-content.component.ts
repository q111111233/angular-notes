import { Component, OnInit, Input } from '@angular/core';
import { Feature } from '../../feature.model'

@Component({
  selector: 'app-feature-content',
  templateUrl: './feature-content.component.html',
  styleUrls: ['./feature-content.component.css']
})
export class FeatureContentComponent implements OnInit {
  @Input() feature: Feature;
  @Input() index: number;

  ngOnInit() {
  }

}
