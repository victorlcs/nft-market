import { NgModule } from "@angular/core";
import { AngularModule } from "src/app/shared/library/angular/angular.module";
import { MaterialUi } from "src/app/shared/library/material-ui/material-ui.module";
import { FooterComponent } from "./footer.component";
//Angular Module
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations:[
        FooterComponent
    ],
    imports:[
        AngularModule,
        MaterialUi,
        FlexLayoutModule
    ],
    exports:[
        FooterComponent
    ]
})
export class FooterModule {

 
}