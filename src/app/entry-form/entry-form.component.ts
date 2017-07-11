import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Player } from '../player.model';


@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  @Output() newPlayerSender = new EventEmitter();

  submitForm(name: string, extremities: number) {
    var newPlayerToAdd: Player = new Player(name, extremities);
    console.log(newPlayerToAdd);
    
    // this.newPlayerSender.emit(newPlayerToAdd);
  }
  constructor() { }

  ngOnInit() {
  }

}
