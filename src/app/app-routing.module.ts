import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { NotesComponent } from './notes/notes.component';
import { FeatureStartComponent } from './feature/feature-start/feature-start.component';
import { FeatureDetailComponent } from './feature/feature-detail/feature-detail.component';
import { FeatureEditComponent } from './feature/feature-edit/feature-edit.component'
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'feature', component: FeatureComponent, children:[
    { path: '', component: FeatureStartComponent },
    { path: 'new', component: FeatureEditComponent },
    { path: ':id', component: FeatureDetailComponent },
    { path: ':id/edit', component: FeatureEditComponent }
  ]},
  {path: 'notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
