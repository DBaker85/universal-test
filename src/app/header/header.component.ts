
import {Component, Input} from '@angular/core';

@Component({
    selector:'header',
    template: `
        <div routerLink="/" routerLinkActive="active">
            <h1>{{title}}</h1>
        </div>
    `,
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

    @Input() title

}