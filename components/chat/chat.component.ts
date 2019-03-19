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
    selector: '[mcs-chat]',
    providers: [],
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    templateUrl: './chat.component.html'
})
export class MCSChatComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {

    ngAfterContentInit(): void {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    ngOnChanges(_changes: SimpleChanges): void {
    }
}