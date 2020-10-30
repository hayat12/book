import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ViewBookComponent } from './view-book/view-book.component';


const routes: Routes = [
  {
    path:"book",
    children: [
      {
        path:"list",
        component:BookComponent
      },
      {
        path:"view/:id",
        component:ViewBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
