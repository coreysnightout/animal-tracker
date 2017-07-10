import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'new-animal',
  template: `
  <div class="new-guy">
    <li>
      <h3 class="new-header">Add A New Animal To The List</h3>
      <label>Enter Animal Species:</label>
      <input #newSpecies>
      <label>Enter Animal Name:</label>
      <input #newName>
      <label>Animal Age:</label>
      <input #newAge>
      <label>Enter Animal Diet:</label>
      <input #newDiet>
      <label>Enter Animal Location:</label>
      <input #newLocation>
      <label>Number of Animal Caretakers:</label>
      <input #newCaretakers>
      <label>Enter Animal Sex:</label>
      <input #newSex>
      <label>Enter Animal Likes:</label>
      <input #newLikes>
      <label>Enter Animal Dislikes:</label>
      <input #newDislikes>
      <button class="new-guy-button" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newAge.value=''; newName.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </li>
  </div>
  `
})

export class NewAnimalListComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
