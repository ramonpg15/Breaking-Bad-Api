import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private _breaking: BreakingBadService) { }
  listEpisodes:any[]=[]
  isCargando=false
  ngOnInit(): void {
    this.getAllEpisodes()
  }
  getAllEpisodes() {
    this._breaking.getEpisodes().subscribe(response => {
      console.log('Episodes', response);
      this.listEpisodes=response
    })
  }

}
