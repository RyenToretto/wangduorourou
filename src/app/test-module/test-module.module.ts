import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTestComponent } from './first-test/first-test.component';
import {FirstNgLibModule} from '@kjf/first-ng-lib';

@NgModule({
    declarations: [FirstTestComponent],
    imports: [
        CommonModule,
        FirstNgLibModule
    ],
    exports: [FirstTestComponent]
})
export class TestModuleModule { }
