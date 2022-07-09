import { NgModule } from "@angular/core";
import { AngularModule } from "src/app/shared/library/angular/angular.module";
import { MaterialUi } from "src/app/shared/library/material-ui/material-ui.module";
import { SignupComponent } from "./signup.component";

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        AngularModule, 
        MaterialUi, 
    ],
    exports: [
      SignupComponent
    ]
})
export class SignupModule {

}