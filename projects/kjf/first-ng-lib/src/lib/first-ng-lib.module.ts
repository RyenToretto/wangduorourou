import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstNgLibComponent } from './first-ng-lib.component';

@NgModule({
    declarations: [FirstNgLibComponent],
    imports: [CommonModule],
    exports: [FirstNgLibComponent]
})
export class FirstNgLibModule { }
