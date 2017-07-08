import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1 class="title">Zoo Tracker</h1>
  </div>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

    <hr>

    <edit-animal [childSelectedAnimal]="chosenAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Tracker';
  chosenAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Cougar', 'Bjork', 3, 'Carnivore', 'Mt Hood Territory', 3, 'male', 'Hunting and killing', 'Humans'),
    new Animal('Grizzly Bear', 'Lock Jaw', 5, 'Carnivore', 'Ochoco National Forest', 5, 'male', 'scratching his back on tree trunks', 'Tennis balls'),
    new Animal('African Wild Dog', 'Bobo', 2, 'Carnivore', 'African Savannah', 2, 'female', 'Listening to Music', 'Heat waves'),
    new Animal('Bald Eagle', 'One Eyed Jackie', 12, 'Carnivore', 'Spokane, Washington', 1, 'female', 'Spreading her wings', 'The Winterhawks' ) ];

    editAnimal(clickedAnimal) {
      this.chosenAnimal = clickedAnimal;
    }

    finishedEditing() {
      this.chosenAnimal = null;
    }

}
