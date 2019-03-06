import { ModuleWithProviders, NgModule } from '@angular/core';

import { MCSButtonModule } from './button/button.module';

export * from './button';

@NgModule({
    exports: [
        MCSButtonModule
    ]
})
export class NgMCSControlsModule {
    /**
     * @deprecated Use `NgMCSControlsModule` instead.
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgMCSControlsModule
        };
    }
}