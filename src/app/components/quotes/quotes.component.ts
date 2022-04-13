import { Component, OnInit } from '@angular/core';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  constructor(private _breaking: BreakingBadService) { }
  listQuotes: any[] = []
  isCargando = false
  ngOnInit(): void {
    this.getAllQuotes()
  }
  getAllQuotes() {
   /*  this.isCargando = true */
    setTimeout(() => {
      this._breaking.getQuotes().subscribe(response => {
        console.log('Frases', response);
        this.listQuotes = response
      })
    }, 2000);
   
  }
}
