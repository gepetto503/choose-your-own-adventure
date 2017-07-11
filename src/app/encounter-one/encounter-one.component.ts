import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';

@Component({
  selector: 'app-encounter-one',
  templateUrl: './encounter-one.component.html',
  styleUrls: ['./encounter-one.component.css']
})
export class EncounterOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
