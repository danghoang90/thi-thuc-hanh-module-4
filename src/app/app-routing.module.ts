import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./page/list/list.component";
import {AddComponent} from "./page/add/add.component";
import {DeleteComponent} from "./page/delete/delete.component";
import {EditComponent} from "./page/edit/edit.component";
import {DetailComponent} from "./page/detail/detail.component";

const routes: Routes = [
  {
    path: 'books',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
