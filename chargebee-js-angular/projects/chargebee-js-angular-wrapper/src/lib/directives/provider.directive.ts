import { Input, Component, Output, EventEmitter, Directive, ElementRef, OnChanges, SimpleChanges, OnInit, ContentChildren, Renderer2, ViewChildren, QueryList, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { validateCbInstance } from '../../utils';

@Component({
    selector: '[cbProvider]',
    template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `
  })
export class Provider implements OnChanges {
    @Input() cbInstance?: object;
    validated: boolean = false;

    constructor() {
        // Set Angular wrapper source for KVL tracking
        (window as any).CbJsSource = 'angular';
    } 

    ngOnChanges(changes: SimpleChanges) {
        if (validateCbInstance(this.cbInstance))
            this.validated = true;
        else {
            this.validated = false;
        }
    }
}