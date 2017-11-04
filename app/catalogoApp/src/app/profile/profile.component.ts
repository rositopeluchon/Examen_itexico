import {Component} from '@angular/core'

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'

})

export class ProfileComponent{
    profiles: any [] =[
        {fist_name:'Carlos', last_name: 'Arenas'},
        {first_name:'Rosalinda', last_name:'Macias'},
        {first_name:'Diegp', last_name:'Abarca'},
        {first_name:'Alexandra', last_name:'Escobar'}        
    ]

}