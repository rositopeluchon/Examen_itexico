import { Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'dog-description',
    templateUrl: './description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() dog: {name:'', description:''};
    
    ngOnChanges(){
        console.log(this.dog);

    }

}