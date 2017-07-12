import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Feature } from '../feature.model';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.css']
})
export class FeatureEditComponent implements OnInit {
  id:number;
  edit=false;
  feature: Feature;
  constructor(private route: ActivatedRoute,private featureService: FeatureService, private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.edit = params['id'] != null;
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newFeature = new Feature(value.title, value.description);
    if(this.edit)
      this.featureService.updateFeature(this.id, newFeature);
    else
      this.featureService.addFeature(newFeature);
    this.edit=false;
    form.reset();
    this.onCancle();
  }

  onCancle(){
    this.router.navigate(['../'],{relativeTo: this.route})
  }

}
