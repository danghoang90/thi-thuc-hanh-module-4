import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addFormBook?: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.addFormBook = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
  }
  submit() {
    console.log(this.addFormBook?.value);
    let data = this.addFormBook?.value;
    this.bookService.create(data).subscribe(res => {
        this.router.navigate(['/books']);
    })
  }


}
