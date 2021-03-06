import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
 import 'hammerjs';
import { LoginformComponent } from './loginform/loginform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { ProductionPlanComponent } from './production-plan/production-plan.component';
import { CostAnalComponent } from './cost-anal/cost-anal.component';
import { MaintenanceSchComponent } from './maintenance-sch/maintenance-sch.component'
 

const appRoutes:Routes = [
  {
    path: 'login',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: '**', redirectTo: 'login'
  },
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    ProductionPlanComponent,
    CostAnalComponent,
    MaintenanceSchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
