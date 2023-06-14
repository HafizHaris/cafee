import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { CustomDatePipe } from './pipes/custom.datepipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LayoutComponent,
    TopbarComponent,
    CustomDatePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
