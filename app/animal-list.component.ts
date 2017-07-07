

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
     <select (change)="onChange($event.target.value)">
       <option value="EveryAnimal" selected="selected">All of The Animals</option>
       <option value="olderAnimals">Animals Older Than 2 Years</option>
       <option value="youngerAnimals">Animals Younger Than 2 Years</option>
     </select>

     <ul>
       <li *ngFor="let currentAnimal of childAnimalList | completeness:filterByAnimalAge">
       <div class="card">
        <p>Species: {{currentAnimal.species}}</p>
        <p>Name: {{currentAnimal.name}}</p>
        <p>Age: {{currentAnimal.age}}</p>
        <p>Diet: {{currentAnimal.diet}}</p>
        <p>Location: {{currentAnimal.location}}</p>
        <p>Caretakers: {{currentAnimal.caretakers}}</p>
        <p>Sex: {{currentAnimal.sex}}</p>
        <p>Likes: {{currentAnimal.likes}}</p>
        <p>Dislikes: {{currentAnimal.dislikes}}</p>
         <button (click)="editButtonHasBeenClicked(currentTask)">Edit Animal!</button>
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

  filterByAnimalAge: string = "EveryAnimal";

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
