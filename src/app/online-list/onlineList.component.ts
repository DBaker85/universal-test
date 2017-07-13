import {Component} from '@angular/core'

@Component({
    selector: 'online-list',
    templateUrl:'./onlineList.component.html',
    styleUrls:['./onlineList.component.css']
})
export class OnlineListComponent{
    public users: Array<{}> = [
        {
            name: 'David',
            online: true,
            id: 10
        },
        {
            name: 'Abby',
            online: false,
            id: 12
        },
        {
            name: 'Stef',
            online: false,
            id: 54
        },
        {
            name: 'Hilmi',
            online: true,
            id: 60
        },
        {
            name: 'Violetta',
            online: true,
            id: 24
        }
    ]
}