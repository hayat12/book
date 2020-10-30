import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  readonly uiState:string="book.book-list";
  bookList$ = of([
    {id:1, name: "book1", desc: "this is the book 1"},
    {id:2, name: "book2", desc: "this is the book 2"},
  ]);
  bookInfo= {id:null, name:'', desc:''};
  constructor(
    private router:Router,
    private bookService:BookService
  ) { }

  ngOnInit(): void {
    this.loadState()
  }

  onView(book){
    this.saveState(book);
    this.router.navigate(['book/view',book.id]);
  }

  /**
   * new i create three methods to save the data and when i back from view page i can get back the saved data.
   * 1: saveState
   * 2: getState 
   * 3: loadData
   */

   private saveState(data){
     console.log(data);
     
     this.bookService.send(this.uiState, {
       ...data
     });
   }

   private getState(){
     this.bookService.get().subscribe((res)=>{
       if (res.key===this.uiState) {
         const data = res.data;
         return this.bookInfo = {...data};
       }
     });
   }

   selectedBook(o){
     if (o==null) {
       return;
     }
     this.bookInfo = {...o};
   }

   loadState(){
     this.getState();
   }
}
