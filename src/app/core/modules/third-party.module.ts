import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        NgSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
    ],
    exports: [
        NgSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: []
})
export class ThirdPartyModule { }
