import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialUi } from "src/app/shared/library/material-ui/material-ui.module";
import { AngularModule } from "src/app/shared/library/angular/angular.module";

@NgModule({
    imports:[
        AngularModule,
        MaterialUi,
        MatToolbarModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports:[
        HeaderComponent
    ]
})

export class HeaderModule {
    
}