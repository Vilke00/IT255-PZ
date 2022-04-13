import { Component, OnInit} from '@angular/core';
import { FormBuilder , FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {

  reviewForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.reviewForm.value);
  }
  get firstName() { return this.reviewForm.get('firstName'); }
  get lastName() { return this.reviewForm.get('lastName'); }
  get email() { return this.reviewForm.get('email'); }
  get comment() { return this.reviewForm.get('comment'); }
}
