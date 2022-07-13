import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileAuthPageComponent } from "./profile-auth-page.component";

// const routes: Routes = [
//     {
//       path: '',
//       component: ProfileAuthPageComponent,
//     },
//   ];
@NgModule({
    declarations: [
        ProfileAuthPageComponent
    ],
    imports: [
        // RouterModule.forChild(routes)
    ],
    exports: [
        ProfileAuthPageComponent
    ]
})
export class ProfileAuthPageModule {

}