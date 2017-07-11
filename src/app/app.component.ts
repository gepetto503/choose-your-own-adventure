import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player.model';

// import { AlbumService } from '../album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AlbumService]
})

export class AppComponent {
  title = "Don't Die";
  // constructor(private router: Router, private albumService: AlbumService) {}
  player: Player = new Player("bob", 4);



  storePlayer(playerToReturn) {
    // this.player = playerToReturn;
    console.log(playerToReturn);

  }


}
