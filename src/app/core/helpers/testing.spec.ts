import { TestBed } from '@angular/core/testing';

// -------------- Modules --------------
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgSelectModule } from '@ng-select/ng-select';

// -------------- Services --------------
import { UserService } from 'src/app/features/components/user/service/user.service';
import { LoginService } from '../services/menu/login.service';
import { MenuService } from '../services/menu/menu.service';

// -------------- Components --------------
import { UserDetailComponent } from 'src/app/features/components/user/components/user-detail/user-detail.component';
import { UserComponent } from 'src/app/features/components/user/user.component';
import { HomeComponent } from 'src/app/features/pages/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

// -------------- Guards --------------
import { AuthGuard } from '../guards/auth.guard';

// -------------- Interceptors --------------
import { OAuthInterceptor } from '../interceptors/oauth-interceptor';
import { TokenizedInterceptor } from '../interceptors/tokenized-interceptor';
import { APP_BASE_HREF } from '@angular/common';

/**
 * Clase de ayuda para construcción de tests unitarios.
 */
export class TestingHelper {
    public static configureTest(): TestBed {
        return TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                UserComponent,
                UserDetailComponent,
                MainComponent,
                MenuComponent,
                HomeComponent,
                PaginationComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                AppRoutingModule,
                HttpClientModule,
                BrowserAnimationsModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (this.createTranslateLoader),
                        deps: [HttpClient]
                    }
                }),
                ToastrModule.forRoot(),
                PaginationModule.forRoot(),
                NgProgressModule,
                NgProgressHttpModule,
                NgProgressRouterModule,
                NgSelectModule
            ],
            providers: [
                AuthGuard,
                LoginService,
                MenuService,
                UserService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenizedInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: OAuthInterceptor,
                    multi: true
                },
                {
                    provide: APP_BASE_HREF, 
                    useValue : '/' 
                }
            ]
        });
    }

    private static createTranslateLoader(httpClient: HttpClient) {
        return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
    }
}
