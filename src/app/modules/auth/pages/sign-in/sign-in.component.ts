import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit {
  google = faGoogle
  facebook = faFacebook

  signInGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signInGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
}
