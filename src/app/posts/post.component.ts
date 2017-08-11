import {Component} from '@angular/core';

@Component({
    selector: 'posts',
    templateUrl: './post.component.html',
    styleUrls:['./post.component.css']
})
export class PostComponent{
    public postlist:Array<{}> = [
        {
            user: 'Lord Bigley the 3rd',
            body: '"David," he said abruptly, "do you perceive anything unusual about the horizon?" As I looked I began to appreciate the reason for the strangeness of the landscape that had haunted me from the first with an illusive suggestion of the bizarre and unnatural—THERE WAS NO HORIZON! As far as the eye could reach out the sea continued and upon its bosom floated tiny islands, those in the distance reduced to mere specks; but ever beyond them was the sea, until the impression became quite real that one was LOOKING UP at the most distant point that the eyes could',
            avatar: 'bigley3'
        },
        {
            user:'Cornelia Virginia Gridley',
            body: 'Alice had never been in a court of justice before, but she had read about them in books, and she was quite pleased to find that she knew the name of nearly everything there."That\'s the judge," she said to herself, "because of his great wig." The judge, by the way, was the King; and as he wore his crown over the wig, (look at the frontispiece if you want to see how he did it,) he did not look at all comfortable, and it was certainly not becoming. "And that\'s the jury-box," thought Alice.',
            avatar: 'cornelia'
        },
        {
            user: 'Thomasina Temperance Porter',
            body: 'The priests took their places in front of the judge, and the clerk proceeded to read in a loud voice a complaint of sacrilege against Phileas Fogg and his servant, who were accused of having violated a place held consecrated by the Brahmin religion. "You hear the charge?" asked the judge. "Yes, sir," replied Mr. Fogg, consulting his watch, "and I admit it." "You admit it?" "I admit it, and I wish to hear these priests admit, in their turn, what they were going to do at the pagoda of Pillaji." The priests looked at each other; they did not',
            avatar: 'thomasina'
        }
    ]
}