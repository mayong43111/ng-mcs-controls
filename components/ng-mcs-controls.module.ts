import { ModuleWithProviders, NgModule } from '@angular/core';

import { MCSButtonModule } from './button/button.module';
import { MCSChatModule } from './chat/chat.module';
import { MCSTitleModule } from './title/title.module';

export * from './button';
export * from './chat';
export * from './title';

@NgModule({
    exports: [
        MCSButtonModule,
        MCSChatModule,
        MCSTitleModule,
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