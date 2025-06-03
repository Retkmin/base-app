import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { PaginatedSearchComponent, FindRequest, Page, Order, Direction } from 'src/app/core/helpers/search';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/features/components/user/service/user.service';

/**
 * Componente para la búsqueda de usuarios.
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    standalone: false
})
export class UserComponent extends PaginatedSearchComponent<User> {
    
  constructor(
    router: Router, 
    translate: TranslateService, 
    toastr: ToastrService, 
    private userService: UserService
  ) {
    super(router, translate, toastr);
  }

  protected findInternal(findRequest: FindRequest): Observable<Page<User>> {
    return this.userService.findUsers(findRequest);
  }

  protected removeInternal(entity: User): Observable<any> {
    return this.userService.toggle(entity);
  }

  protected getDefaultOrder(): Order {
    return  {
      property: 'id',
      direction: Direction.ASC
    };
  }
}
