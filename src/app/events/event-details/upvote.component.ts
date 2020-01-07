import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    styleUrls: ["./upvote.component.css"],
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
    <div class="well votingWidget">
    <div class="votingButton">
    <i class="glyphicon glyphicon-heart" [style.color]="iconColour"></i>
    <div>
    <div class="badge badge-inverse votingCount">
    <div>{{count}}</div>
    </div>
    </div>
    </div>
    `
})
export class UpVoteComponent {

    @Input() count: number;
    @Input() set voted(value) {                 //setter used in conjuection with [style.colour] binding to change from white to red
        this.iconColour = value ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColour: string;

    constructor() { }

    onClick() {
        this.vote.emit({});
    }



}