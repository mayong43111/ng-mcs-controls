import { Component, OnInit } from '@angular/core';
import { McsPageTitleService } from 'ng-mcs-controls';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private pageTitle: McsPageTitleService) {
    }

    ngOnInit(): void {
        this.pageTitle.init({
            suffix: 'NG-MCS-CONTROLS',
        });
    }
}