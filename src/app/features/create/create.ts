import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.form.controls.title.value;
  }
}
