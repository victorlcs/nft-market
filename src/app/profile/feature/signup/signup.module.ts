import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularModule } from "src/app/shared/library/angular/angular.module";
import { MaterialUi } from "src/app/shared/library/material-ui/material-ui.module";
import { SignupComponent } from "./signup.component";

const routes: Routes = [
    {
      path: '',
      component: SignupComponent,
    },
  ];
@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        AngularModule, 
        MaterialUi, 
        RouterModule.forChild(routes)
    ]
})
export class SingupModule {

}