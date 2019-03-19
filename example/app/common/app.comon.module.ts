import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons.module';

import { IndexNavComponent } from './index.nav.component';

@NgModule({
    declarations: [IndexNavComponent],
    exports: [IndexNavComponent],
    imports: [
        RouterModule,
        IconsModule,
    ]
})
export class AppCommonModule {
}