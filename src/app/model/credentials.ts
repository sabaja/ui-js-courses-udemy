import { Injectable } from "@angular/core";

/*https://www.youtube.com/watch?v=lAlOryf1-WU&ab_channel=Angular*/
// class annotation as Injectable
@Injectable({ providedIn: 'root' })
export class Credentials {

    username: string;
    password: string;

    constructor() {

        this.username = '';
        this.password = '';

    }
}
