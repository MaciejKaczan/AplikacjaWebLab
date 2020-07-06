import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title: string = "test";
    isCool: boolean = true;
    year: number = 2020;
}
