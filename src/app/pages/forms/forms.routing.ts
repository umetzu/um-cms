import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { Wizard } from './components/wizard/wizard.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'wizard', component: Wizard }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
