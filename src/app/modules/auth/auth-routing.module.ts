import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'

const routes: Routes = [
  {
    path: 'kayit',
    component: SignUpComponent,
  },
  {
    path: 'giris',
    component: SignInComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
