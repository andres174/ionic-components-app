import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./components/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./components/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./components/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./components/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./components/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./components/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./components/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./components/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./components/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./components/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list-item',
    loadChildren: () => import('./components/list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./components/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./components/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-inline',
    loadChildren: () => import('./components/modal-inline/modal-inline.module').then( m => m.ModalInlinePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./components/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./components/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./components/skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./components/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./components/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./components/breadcrumbs/breadcrumbs.module').then( m => m.BreadcrumbsPageModule)
  },
  {
    path: 'nav',
    loadChildren: () => import('./components/nav/nav.module').then( m => m.NavPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
