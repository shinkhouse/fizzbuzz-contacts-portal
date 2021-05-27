import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then((m) => m.ContactsModule)
    },
    {
        path: 'frequent',
        loadChildren: () => import('./pages/frequent/frequent.module').then((m) => m.FrequentModule)
    },
    {
        path: 'suggestions',
        loadChildren: () => import('./pages/suggestions/suggestions.module').then((m) => m.SuggestionsModule)
    },
    {
        path: 'tag/:id',
        loadChildren: () => import('./pages/tag/tag.module').then((m) => m.TagModule)
    },
    {
        path: 'other',
        loadChildren: () => import('./pages/other/other.module').then((m) => m.OtherModule)
    },
    {
        path: 'trash',
        loadChildren: () => import('./pages/trash/trash.module').then((m) => m.TrashModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
