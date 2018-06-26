import { Component, OnInit } from '@angular/core';
import { PetService } from '../home/home.service';
import { Observable } from "rxjs";

@Component({
    selector:'contact-list',
    templateUrl:'./contact.component.html',
    styleUrls:['../app.component.css','./contact.component.css']
})

export class ContactComponent implements OnInit{
    dogs: Observable<string[]>;
    constructor(private petService: PetService) {

    }

    ngOnInit(){
        this.dogs = this.petService.findPets('dog');
        console.log(this.dogs);
    }
}