import { Component } from '@angular/core';

import arraywords from "../util/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';


  words = '';
  random = '';
  limit = 1;

  array: any[] = arraywords;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arraywords.slice(0, this.limit).join(" ");
  }

  temp() {
    var item = this.array[Math.floor(Math.random() * this.array.length)];
    return item;
  }

  randomgenerate() {
    this.random = "";
    for (let i = 0; i < this.limit; i++) {
      this.random += this.temp() + " ";
    }
  }



}
