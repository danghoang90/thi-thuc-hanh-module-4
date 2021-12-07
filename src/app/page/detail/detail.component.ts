import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailForm?: FormGroup;
  id?: number;
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailForm = this.fb.group({
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

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(res => {
      this.detailForm = new FormGroup({
        title: new FormControl(res?.title),
        author: new FormControl(res?.author),
        description: new FormControl(res?.description),
      });
    })
  }
}
