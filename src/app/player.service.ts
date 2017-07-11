import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './players-club';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return PLAYERS;
  }

}
