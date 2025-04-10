import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/core/components/pagination/pagination.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationModule } from 'ngx-bootstrap/pagination';

const routes: Routes = [
  { path: '', component: UserComponent },
  
  /**
   * Creación de usuarios.
   */
  {
    path: 'users/create',
    component: UserDetailComponent
  },
  /**
   * Detalle de usuarios.
   */
  {
    path: 'users/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [UserComponent, UserDetailComponent, PaginationComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NgSelectModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
