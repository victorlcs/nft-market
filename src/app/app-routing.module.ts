import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [ 
    {
        path:'profile',
        loadChildren:()=> import('./profile/feature/profile-shell/profile-shell.module').then(m=>m.ProfileShellModule)
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[

    ]
})
export class AppRoutingModule {

}