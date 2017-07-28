import {Component} from '@angular/core';

@Component({
    selector: 'news',
    template:`
        <div *ngFor="let news of newslist" class="news-container">
            <img src="http://via.placeholder.com/150x150">
            <p class="text">
                {{news.text}}
            </p>
        </div>
    `,
    styleUrls:['./news.component.css']
})
export class NewsComponent{
    public newslist:Array<{}> = [
        {
            user: 'Lord Bigley the 3rd',
            text: '"David," he said abruptly, "do you perceive anything unusual about the horizon?" As I looked I began to appreciate the reason for the strangeness of the landscape that had haunted me from the first with an illusive suggestion of the bizarre and unnatural—THERE WAS NO HORIZON! As far as the eye could reach out the sea continued and upon its bosom floated tiny islands, those in the distance reduced to mere specks; but ever beyond them was the sea, until the impression became quite real that one was LOOKING UP at the most distant point that the eyes could',
            avatar: 'bigley3'
        },
        {
            user:'Cornelia Virginia Gridley',
            text: 'Esse shoulder drumstick tenderloin ut ad landjaeger ea. Aute et rump fatback pastrami cupim. Adipisicing hamburger ham qui laborum burgdoggen sunt meatball venison. Cupidatat dolore turducken tail adipisicing, chicken ut meatloaf duis boudin quis velit turkey.',
            avatar: 'cornelia'
        },
        {
            user: 'Thomasina Temperance Porter',
            text: 'Bresaola shankle pariatur jowl ham hock commodo, dolor in quis incididunt ribeye salami sed. Anim biltong labore capicola. In jowl ea tail sunt picanha laboris lorem, velit jerky pancetta kevin adipisicing pastrami tenderloin. Officia ground round pig eiusmod fatback shank. Cow pig meatloaf chuck pastrami sed landjaeger elit andouille pariatur. Strip steak chicken ham frankfurter esse magna salami, dolore velit et irure fatback anim tri-tip nostrud. Chicken leberkas alcatra bresaola ut, est spare ribs venison ham salami corned beef.',
            avatar: 'thomasina'
        }
    ]
}