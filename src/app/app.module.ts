import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { FeatureListComponent } from './feature/feature-list/feature-list.component';
import { FeatureDetailComponent } from './feature/feature-detail/feature-detail.component';
import { NotesContentComponent } from './notes/notes-content/notes-content.component';
import { FeatureContentComponent } from './feature/feature-list/feature-content/feature-content.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NoteService } from './notes/note.service';
import { AppRoutingModule } from './app-routing.module';
import { FeatureStartComponent } from './feature/feature-start/feature-start.component';
import { FeatureEditComponent } from './feature/feature-edit/feature-edit.component';
import { FeatureService} from './feature/feature.service';
import { DataStorageService} from './shared/data-storage.service';
import { ShortenPipe } from './shared/shorten.pipe';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    NotesComponent,
    HeaderComponent,
    FeatureListComponent,
    FeatureDetailComponent,
    NotesContentComponent,
    FeatureContentComponent,
    DropdownDirective,
    FeatureStartComponent,
    FeatureEditComponent,
    ShortenPipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService, FeatureService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
