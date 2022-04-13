import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:any;
  quotes:Quote[] =[
    new Quote('Autumn Green','Nelson Mandela', 'It always seems impossible until it is done.', 5),
  ];

  addNewQuote(quote:any){
    this.quotes.push(quote)
  }
  
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDone:any, index:any){
    if (isDone) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
ngOnInit(){
  
}
}

