import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(['book/list']);
  }
}
