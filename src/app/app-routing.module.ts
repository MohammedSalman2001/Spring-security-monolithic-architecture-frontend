import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/security/signup',pathMatch:'full'},
  { path: 'doctor', loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
