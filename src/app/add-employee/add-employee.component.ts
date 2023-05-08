import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  //name = new FormControl('demo', [Validators.required]);

  empForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      state: ['']
    })
  })


  constructor(private fb: FormBuilder) {
    
  }

  getFromGroupValues() {
    console.log(this.empForm);
    console.log(this.empForm.value);
  //  console.log(this.empForm.get('firstName')?.value);
    console.log(this.empForm.value.firstName);
  }

  // getValue() {
  //   console.log(this.name.value);
  // }

  setValue() {
    this.empForm.setValue({
      firstName: 'first1',
      lastName: 'last1',
      address: {
        city: 'city1',
        state: 'state1'
      }
    });

    // this.empForm.patchValue({
    //   firstName: 'first1',
    //  // lastName: 'last1',
    //   address: {
    //     city: 'city1',
    //     //state: 'state1'
    //   }
    // });
  }

}
