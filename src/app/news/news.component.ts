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
            text: 'Spicy jalapeno bacon ipsum dolor amet ut est corned beef, pastrami voluptate short loin elit pork chop prosciutto alcatra pig capicola swine. Pork spare ribs id incididunt tail filet mignon. Id nostrud doner leberkas corned beef turducken short loin officia cupim dolore cow exercitation. T-bone elit est capicola turkey jerky sausage ut ham kielbasa ground round ipsum beef ribs pork chop do. Nisi boudin t-bone swine veniam ham jowl dolor voluptate est occaecat qui frankfurter pancetta. Sint ham spare ribs leberkas ad non porchetta, veniam meatloaf id doner fugiat.'
        },
        {
            text: 'Esse shoulder drumstick tenderloin ut ad landjaeger ea. Aute et rump fatback pastrami cupim. Adipisicing hamburger ham qui laborum burgdoggen sunt meatball venison. Cupidatat dolore turducken tail adipisicing, chicken ut meatloaf duis boudin quis velit turkey.'
        },
        {
            text: 'Bresaola shankle pariatur jowl ham hock commodo, dolor in quis incididunt ribeye salami sed. Anim biltong labore capicola. In jowl ea tail sunt picanha laboris lorem, velit jerky pancetta kevin adipisicing pastrami tenderloin. Officia ground round pig eiusmod fatback shank. Cow pig meatloaf chuck pastrami sed landjaeger elit andouille pariatur. Strip steak chicken ham frankfurter esse magna salami, dolore velit et irure fatback anim tri-tip nostrud. Chicken leberkas alcatra bresaola ut, est spare ribs venison ham salami corned beef.'
        }
    ]
}