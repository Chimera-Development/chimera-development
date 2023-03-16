import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const moduleRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', loadChildren: ()=> import('./home/home.module')
      .then(module => module.HomeModule)
  },
  {path:'faq', loadChildren: ()=> import('./faq/faq.module')
      .then(module => module.FaqModule)
  },
  {path:'auth', loadChildren: ()=> import('./auth/auth.module')
      .then(module => module.AuthModule)
  },
  {path:'error', loadChildren: ()=> import('./error/error.module')
      .then(module => module.ErrorModule)
  },
  {path:'about', loadChildren: ()=> import('./about/about.module')
      .then(module => module.AboutModule)
  },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(moduleRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
