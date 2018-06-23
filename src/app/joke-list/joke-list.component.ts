import { Component, OnInit } from '@angular/core';
class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;
  constructor(setup: string, punchline: string) {
  this.setup = setup;
  this.punchline = punchline;
  this.hide = true;
  }
  toggle() {
  this.hide = !this.hide;
  }
  }
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})

export class JokeListComponent implements OnInit {

  jokes: Joke[];
 
constructor() {
this.jokes = [new Joke("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"),
new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony(Mascarpone)"),
new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’")
];

}


  ngOnInit() {
  }

}
