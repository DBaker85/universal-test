import {Component} from '@angular/core'

@Component({
    selector: 'online-list',
    templateUrl:'./onlineList.component.html',
    styleUrls:['./onlineList.component.css']
})
export class OnlineListComponent{
    public users: Array<{}> = [
        {
            name: 'Lord Bigley',
            online: true,
            id: 10
        },
        {
            name: 'Cornelia',
            online: false,
            id: 12
        },
        {
            name: 'Thomasina',
            online: false,
            id: 54
        },
        {
            name: 'Sterling',
            online: true,
            id: 60
        },
        {
            name: 'Lysander',
            online: true,
            id: 24
        }
    ]
}