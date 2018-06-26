import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class PetService {

    constructor(private jsonp: Jsonp) { }

    private petsUrl = 'http://api.petfinder.com/';

    findPets(animal: string) {

        const endPoint = 'pet.find';


        let params = new URLSearchParams();
        params.set('key', '');
        params.set('location', 'texas');
        params.set('animal', animal);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params }).toPromise()
            .then(response => <string[]> response.json().petfinder.pets.pet);
    }

    findPetsById(id: string) {
        const endPoint = 'pet.find';


        let params = new URLSearchParams();
        params.set('key', '');
        params.set('id', id);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params }).toPromise()
            .then(response => {console.log(response.json().petfinder.pet)});
    }
}