

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
     <select class="drop" (change)="onChange($event.target.value)">
       <option value="everyAnimal" selected="selected">All of The Animals</option>
       <option value="olderAnimals">Animals Older Than 2 Years</option>
       <option value="youngerAnimals">Animals Younger Than 2 Years</option>
     </select>

     <h3>Animals Tracked</h3>
     <ul>
       <li *ngFor="let currentAnimal of childAnimalList | ageFind:filterByAnimalAge">
       <div class="card">
        <p><strong><i>Species:</i></strong> {{currentAnimal.species}}</p>
        <p><strong><i>Name:</i></strong> {{currentAnimal.name}}</p>
        <p><strong><i>Age:</i></strong> {{currentAnimal.age}}</p>
        <p><strong><i>Diet:</i></strong> {{currentAnimal.diet}}</p>
        <p><strong><i>Location:</i></strong> {{currentAnimal.location}}</p>
        <p><strong><i>Caretakers:</i></strong> {{currentAnimal.caretakers}}</p>
        <p><strong><i>Sex:</i></strong> {{currentAnimal.sex}}</p>
        <p><strong><i>Likes:</i></strong> {{currentAnimal.likes}}</p>
        <p><strong><i>Dislikes:</i></strong> {{currentAnimal.dislikes}}</p>
        </div><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal!</button>
       </li>
     </ul>
   `
 })

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  onChange(optionFromMenu) {
    this.filterByAnimalAge = optionFromMenu;
  }

  filterByAnimalAge: string = "everyAnimal";

  editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  }

}



// isDone(clickedTask: Task) {
//   if(clickedTask.done === true) {
//     alert("This task is done!");
//   } else {
//     alert("This task is not done. Better get to work!");
//   }
// }




// priorityColor(currentTask){
//   if (currentTask.priority === 3){
//     return "bg-danger";
//   } else if (currentTask.priority === 2) {
//     return  "bg-warning";
//   } else {
//     return "bg-info";
//   }
// }

// toggleDone(clickedTask: Task, setCompleteness: boolean) {
//   clickedTask.done = setCompleteness;
// }
