import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../models/menu';
import { LoginService } from '../../services/menu/login.service';
import { MenuService } from '../../services/menu/menu.service';
import { Router } from '@angular/router';

/**
 * Cmp to show the menu
 */
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
  @Output() collapse: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  /**
   * Menu items
   */
  menuItems!: MenuItem[];

  constructor(private router: Router, private menuService: MenuService, private loginService: LoginService) { }

  ngOnInit() {
    this.menuService.getMenu()
      .then((menuItems: MenuItem[]) => {
        this.menuItems = menuItems;
      });
  }

  /**
   * Navigate to logout
   */
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

    /**
   * Emit event when toogle menu is click
   */
  public collapseMenu() {
    this.collapse.emit(true);
  }

}
