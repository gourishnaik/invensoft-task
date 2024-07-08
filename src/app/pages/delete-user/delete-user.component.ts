import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit{
  constructor(private api:ApiCallsService){}
  bookingreq: any;
  ngOnInit(): void {
 
    this.getAllbookings()
  }

  getAllbookings(){
    this.api.getBooksData().subscribe((res=>{
      console.log(res);
     this.bookingreq = res;
    }))
  }
  deleteuser(id: any): void {
    if (confirm('Are you sure you want to delete this book?')) {
    this.api.deleteBook(id).subscribe(res => {
      alert('Deleted successfully');
      this.getAllbookings()
    });
  }else{
    alert("something went wrong")
  }
  }
}
