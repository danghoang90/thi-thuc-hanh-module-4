import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteFormBook?: FormGroup;
  id?: number;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.deleteFormBook = this.fb.group({
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


  deleteBook(id: any) {
    if (confirm('Are You Sure?') == true){
      this.bookService.delete(this.id).subscribe(res => {
        this.router.navigate(['/books']);
      })
    }
  };
  getBook(id: number) {
    return this.bookService.findById(id).subscribe(res => {
      this.deleteFormBook = new FormGroup({
        title: new FormControl(res?.title),
        author: new FormControl(res?.author),
        description: new FormControl(res?.description),
      });
    })
  }
}
