import { Routes } from '@angular/router';
import { ContactDetailsComponent } from './core/components/contact-details/contact-details.component';

export const APP_ROUTES: Routes = [
    {
        path: 'contact-deets',
        component: ContactDetailsComponent,
    },
    {
        path: 'contacts',
        loadChildren: () =>
            import('./pages/contacts/contacts.routing').then(
                (m) => m.Contacts_Routes
            ),
    },
    {
        path: 'frequent',
        loadChildren: () =>
            import('./pages/frequent/frequent.routing').then(
                (m) => m.Frequent_Routes
            ),
    },
    {
        path: 'suggestions',
        loadChildren: () =>
            import('./pages/suggestions/suggestions.routing').then(
                (m) => m.Suggestions_Routes
            ),
    },
    {
        path: 'tag/:id',
        loadChildren: () =>
            import('./pages/tag/tag.routing').then((m) => m.Tag_Routes),
    },
    {
        path: 'other',
        loadChildren: () =>
            import('./pages/other/other.routing').then((m) => m.Other_Routes),
    },
    {
        path: 'trash',
        loadChildren: () =>
            import('./pages/trash/trash.routing').then((m) => m.Trash_Routes),
    },
];
