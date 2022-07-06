import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainPageComponent } from './profile-main-page.component';
//Material UI
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularModule } from 'src/app/shared/library/angular/angular.module';
import { ProfileAuthPageModule } from '../profile-auth-page/profile-auth.module';
import { LoginModule } from '../login/login.module';
const routes: Routes = [{ path: '', component: ProfileMainPageComponent }];
@NgModule({
  declarations: [ProfileMainPageComponent],
  imports: [
    MatButtonToggleModule,
    AngularModule,
    ProfileAuthPageModule,
    LoginModule,
    RouterModule.forChild(routes)
  ],
})
export class ProfileMainPage {}
