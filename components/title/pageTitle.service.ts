import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

export interface IMcsPageTitleServiceOptions {
    defaultPageTitle?: string;
    prefix?: string;
    suffix?: string;
    separator?: string;
}

@Injectable({
    providedIn: 'root',
})
export class McsPageTitleService {

    private defaultOptions: IMcsPageTitleServiceOptions = {
        separator: ' - '
    };

    private inited: boolean;

    private options: IMcsPageTitleServiceOptions;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
    }

    public init(options?: IMcsPageTitleServiceOptions) {

        if (this.inited === true) return;
        this.inited = true;

        if (options)
            this.options = Object.assign({}, this.defaultOptions, options);

        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map(route => route.firstChild),
                switchMap(route => route.data),
                map((data) => this.getPageTitle(data, this.options)),
            )
            .subscribe((pathString) => this.titleService.setTitle(pathString));
    }

    private getPageTitle(data: any, options: IMcsPageTitleServiceOptions): string {

        var title = data.pageTitle || options.defaultPageTitle;

        if (options.prefix || data.pageTitlePrefix) {
            title = title ?
                `${data.pageTitlePrefix || options.prefix}${options.separator}${title || ''}`
                : (data.pageTitlePrefix || options.prefix);
        }

        if (options.suffix || data.pageTitleSuffix) {
            title = title ?
                `${title || ''}${options.separator}${data.pageTitleSuffix || options.suffix}`
                : data.pageTitleSuffix || options.suffix;
        }

        return title;
    }
}