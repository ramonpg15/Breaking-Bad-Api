import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listCharacteres: any[] = []
  pagPrincipal=false
  isCargando=true
  constructor(private _breaking: BreakingBadService) { }

  ngOnInit(): void {
    this.getAllCharacteres()
  }

  getAllCharacteres() {
    this._breaking.getCharacters().subscribe(response => {
      console.log('response', response);
      this.listCharacteres = response
     this.pagPrincipal=true
    })
  }

}
