import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../profile-main-page/profile-main-page.module').then((m) => m.ProfileMainPage),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ProfileShellRoutingModule {}
