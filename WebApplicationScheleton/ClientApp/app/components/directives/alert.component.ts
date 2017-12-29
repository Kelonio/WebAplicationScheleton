import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AlertService } from '../services/index';
import { Subscription } from 'rxjs/Subscription';



@Component({    
    selector: 'alert',
    templateUrl: 'alert.component.html'

})



export class AlertComponent {

    message: any;
    
    private subscription: Subscription;


    

    constructor(private alertService: AlertService) {
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(message => {
            this.message = message;            
        });
    }

    /*
    ngOnInit() {

        this.alertService.getMessage().subscribe(message => {
            console.log('ha llegado mensaje');
            console.log(message);
            this.message = message;
            this.texto = 'ha llegado mensaje';
           
        });

    }
    */
    ngOnDestroy(): void {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    }

}