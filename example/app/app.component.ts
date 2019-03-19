import { Component, OnInit } from '@angular/core';
import { McsPageTitleService } from '../../components/title';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private pageTitle: McsPageTitleService) {
    }

    ngOnInit(): void {
        this.pageTitle.init({
            prefix: 'MCS',
        });
    }
}