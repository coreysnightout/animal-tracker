import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalListComponent } from './edit-animal-list.component';
import { NewAnimalListComponent } from './new-animal-list.component';
import { AgesFindPipe } from './ageFind.pipe';

@NgModule({
  imports: [BrowserModule,
                FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  EditAnimalListComponent,
                  NewAnimalListComponent,
                  AgesFindPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
