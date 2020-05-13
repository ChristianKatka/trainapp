// Used to manage all angular material packages

import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatTableModule
    ],

    //so we can use it outside of this component
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatTableModule
    ]
})

export class MaterialModule { }

