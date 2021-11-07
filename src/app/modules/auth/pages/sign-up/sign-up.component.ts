import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit {
  google = faGoogle
  facebook = faFacebook
  arrowLeft = faArrowLeft

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      phoneNumber: ['', [Validators.required]],
    })

    this.secondFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
    })

    this.thirdFormGroup = this.formBuilder.group({
      verificationCode: ['', [Validators.required]],
    })
  }
}
