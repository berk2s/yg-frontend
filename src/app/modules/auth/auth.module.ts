import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '@shared/shared.module'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { NgxMaskModule } from 'ngx-mask';
import { SignInComponent } from './pages/sign-in/sign-in.component'

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
})
export class AuthModule {}
