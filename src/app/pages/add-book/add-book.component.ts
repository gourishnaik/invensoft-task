import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/api-calls.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  bookForm: FormGroup|any;
  constructor(private api:ApiCallsService,private form: FormBuilder,private route:Router){}
  
  ngOnInit(): void {
    this.bookForm = this.form.group({
      ibsn: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      publication: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      details: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
      quantity:  ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      price: ['', [Validators.required, Validators.min(10), Validators.max(99999)]],
      branch: ['',[Validators.required]]
    });


   
  }
  save() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
    } else {
      this.api.addBook(this.bookForm.value).subscribe(
        response => {
              this.route.navigateByUrl('/dashboard-page')
       alert('book added successfully')
        
        },
        error => {
          alert('please check json server')
        }
      );
    }

  }
}
