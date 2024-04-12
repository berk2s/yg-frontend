import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@shared/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,

    FontAwesomeModule,

    FlexLayoutModule,
  ],
})
export class SharedModule {}
