import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AppMenu } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  imports: [NzPageHeaderModule, AppMenu],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class AppNavbar {}
