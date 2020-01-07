import { Component, Input, } from "@angular/core";
import { IEvent } from './shared/index';
@Component({
    selector: 'events-thumbnail',
    template: `    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date:{{event?.date | date: 'dd/MM/yyyy'}}</div>
    <div>Time: {{event?.time }}</div>
 
    <div>Price: {{event?.price | currency: 'GBP'}} </div>
    <div [hidden] = "!event?.location">
        <span class="pad-left">Location: {{event?.location.address}} <br> {{event?.location.city}} <br> {{event?.location.country }}</span>
    </div>

    <div [hidden] = "!event?.OnlineUrl">OnlineUrl: {{event?.OnlineUrl}} </div>

    `
    ,

    styles: [`
    .thumbnail {min-height: 210px;}
    .pad-left { margin-left:0px, color: #bbb;}
    .well div { color: #bbb;}
    `
    ]
})

export class EventsThumbnailComponent {
    @Input() event: IEvent
}