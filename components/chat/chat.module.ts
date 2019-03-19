import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MCSChatComponent } from './chat.component';

@NgModule({
    declarations: [MCSChatComponent],
    exports: [MCSChatComponent],
    imports: [CommonModule, ObserversModule]
})
export class MCSChatModule {
}