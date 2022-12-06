import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'horario',
        loadChildren: () => import('src/app/components/tab-pages/horario/horario.module').then(m => m.HorarioPageModule),
      },
      {
        path: 'map',
        loadChildren: () => import('src/app/components/tab-pages/map/map.module').then(m => m.MapPageModule),
      },
      {
        path: 'task',
        loadChildren: () => import('src/app/components/tab-pages/task/task.module').then(m => m.TaskPageModule),
      },
      {
        path: 'map-g',
        loadChildren: () => import('src/app/components/tab-pages/map-g/map-g.module').then(m => m.MapGPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
