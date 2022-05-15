import { NgModule } from "@angular/core";
import { AngularModule } from "src/app/shared/library/angular/angular.module";
import { MaterialUi } from "src/app/shared/library/material-ui/material-ui.module";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        AngularModule,
        MaterialUi
    ],
    exports:[
    ]
})
export class LoginModule {

}