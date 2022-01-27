import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        NgSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule
    ],
    declarations: [
    ],
    exports: [
        NgSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule
    ],
    providers: []
})
export class ThirdPartyModule { }
