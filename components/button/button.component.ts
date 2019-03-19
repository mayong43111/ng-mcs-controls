import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: '[mcs-button]',
    providers: [],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './button.component.html'
})
export class MCSButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {

    public nzLoading: boolean;

    ngAfterContentInit(): void {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    ngOnChanges(_changes: SimpleChanges): void {
    }
}