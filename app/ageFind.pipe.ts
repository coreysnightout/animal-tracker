import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "ageFind",
  pure: false
})

export class AgesFindPipe implements PipeTransform {

  transform(input: Animal[], chosenAge) {
    var output: Animal[] = [];
    if(chosenAge === "youngerAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenAge === "olderAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

































//   transform(input: Animal[], chosenAge) {
//     var output: Animal[] = [];
//     if (chosenAge === "youngerAnimals") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].age <= 2) {
//           output.push(input[i]);
//         }
//       }
//     }
//   }
// }
