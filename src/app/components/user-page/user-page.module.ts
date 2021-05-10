import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserPageModule { }
