import { ModuleWithProviders, NgModule } from '@angular/core';

import { MCSButtonModule } from './button/button.module';
import { MCSChatModule } from './chat/chat.module';

export * from './button';
export * from './chat';

@NgModule({
    exports: [
        MCSButtonModule,
        MCSChatModule
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