import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointbale">
    <h4 class="well-title"> {{title}}</h4>
    <ng-content *ngIf="visible"></ng-content>
    `
})

export class CollapsibleWellComponent {
    @Input() title: string;
    visible: boolean = true;


    toggleContent() {
        this.visible = !this.visible;
    }
}
