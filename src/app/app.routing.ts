import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MarketComponent } from './market/market.component';
import { BottleDetailComponent } from './bottle-detail/bottle-detail.component';

const appRoutes: Routes = [ 
    {
      path: '',
      component: SplashComponent
      },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'market',
      component: MarketComponent
      },
    {
      path: 'bottle/:id',
      component: BottleDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);