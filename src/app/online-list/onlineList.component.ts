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
            id: 10,
            comments:[
                {
                    comment: "Spiffing comment sir",
                    rated: true
                },
                {
                    comment: "Taly ho!",
                    rated: false
                },
                {
                    comment: "I disagree my good sir!",
                    rated: false
                },
            ]
        },
        {
            name: 'Cornelia',
            online: false,
            id: 12
        },
        {
            name: 'Thomasina',
            online: false,
            id: 54,
             comments:[
                {
                    comment: "You are a blithering idiot my good sir",
                    rated: false
                },
                {
                    comment: "Nary a sillier response have I read",
                    rated: true
                }
            ]
            
        },
        {
            name: 'Sterling',
            online: true,
            id: 60
        },
        {
            name: 'Lysander',
            online: true,
            id: 24,
             comments:[
                {
                    comment: "I acknowledge defeat",
                    rated: false
                }
            ]
        }
    ]
}