import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserBehaviorService } from './user-behavior.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [UserFormComponent],
  providers: [UserBehaviorService],
})
export class UserModule {}
