import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MCSButtonComponent } from './button.component';

@NgModule({
    declarations: [MCSButtonComponent],
    exports: [MCSButtonComponent],
    imports: [CommonModule, ObserversModule]
})
export class MCSButtonModule {
}