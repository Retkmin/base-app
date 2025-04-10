import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../../services/menu/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { Observable, filter, of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let routerSpy: { navigate : unknown, events: Observable<NavigationEnd> };

  beforeEach(async() => {
    routerSpy = { 
      navigate : jasmine.createSpy('navigate'), 
      events: of(new NavigationEnd(0, 'home', 'home')).pipe(filter(event => event instanceof NavigationEnd)) 
    };
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        AppModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const loginService = TestBed.inject(LoginService);
    const logOutSpy = spyOn(loginService, 'logout');
    component.logout();
    expect(logOutSpy).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should call collapse emiter when click collapse button', () => {
    const spyCollapse = spyOn(component.collapse, 'emit');
    component.collapseMenu();
    expect(spyCollapse).toHaveBeenCalled();
  });
});
