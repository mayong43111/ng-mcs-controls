import { NgModule } from '@angular/core';
import * as feather from 'angular-feather';

const icons = [
    feather.IconHome,
    feather.IconFile,
    feather.IconShoppingCart
];

@NgModule({
    imports: icons,
    exports: icons
})
export class IconsModule { }