import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Feature } from '../feature.model';
import { FeatureService } from '../feature.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit{
  features: Feature[];
  constructor( private featureService: FeatureService,
  private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.featureService.getFeature().then(features=>this.features=features as Feature[]);
  }
  onNewFeature(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
