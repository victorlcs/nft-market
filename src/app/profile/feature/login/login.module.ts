import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularModule } from 'src/app/shared/library/angular/angular.module';
import { MaterialUi } from 'src/app/shared/library/material-ui/material-ui.module';
import { LoginComponent } from './login.component';

//Material UI
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent,
//   },
// ];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularModule, 
    MaterialUi, 
    MatButtonToggleModule,
    // RouterModule.forChild(routes)
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
