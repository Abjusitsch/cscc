import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule
@Component({
    selector: 'app-layout',
    imports: [RouterModule],
    standalone: true, // Add RouterModule to the imports array
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    providers: [Router]
})
export class LayoutComponent {
    constructor(private router: Router) {}
}
