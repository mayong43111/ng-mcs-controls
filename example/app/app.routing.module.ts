import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent, data: { pageTitle: 'We welcome you.' } },
    { path: 'chat', component: WelcomeComponent, data: { pageTitle: 'We welcome you.' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule
        };
    }
}