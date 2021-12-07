import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editFrom?: FormGroup;
  id?: number;
  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editFrom = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // @ts-ignore
      this.getBook(this.id);
    })
  }
  updateBook(id: any) {
    const book = this.editFrom?.value;
    this.bookService.update(id, book).subscribe(res => {
      console.log(res)
      this.router.navigate(['/books']);

    })
  }
  getBook(id: number) {
    return this.bookService.findById(id).subscribe(res => {
      this.editFrom = new FormGroup({
        title: new FormControl(res?.title),
        author: new FormControl(res?.author),
        description: new FormControl(res?.description),
      });
    })
  }
}
