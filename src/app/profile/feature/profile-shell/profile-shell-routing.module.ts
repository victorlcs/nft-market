import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes:Routes = [
    {
        path:'',
        loadChildren: () => import('../login/login.module')
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        
    ]
})

export class ProfileShellRoutingModule{

}