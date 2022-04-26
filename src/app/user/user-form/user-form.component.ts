import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserBehaviorService } from '../user-behavior.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    public userBehaviorService: UserBehaviorService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      status: new FormControl(),
    });
  }
  
  onSubmit() {
    if (this.form.valid) {

      const value = this.form.value();
      this.userBehaviorService.createItem(value);
    }
  }

}