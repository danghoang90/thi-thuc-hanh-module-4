import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: any[] = [];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe(res => {
      console.log(res)
     this.books = res;
    })
  }


}
