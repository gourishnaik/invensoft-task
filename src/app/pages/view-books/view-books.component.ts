import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit{
  constructor(private api:ApiCallsService){}
  bookingreq: any;
  ngOnInit(): void {
    // ********* get request
    this.api.getBooksData().subscribe((res=>{
      console.log(res);
     this.bookingreq = res;
    }))
  }

}
