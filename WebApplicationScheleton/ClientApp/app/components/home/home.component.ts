import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../services/index';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit  {

    constructor(              
        private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.success('Estas en la home', true);    
    }


}
