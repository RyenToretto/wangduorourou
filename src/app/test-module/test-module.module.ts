import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTestComponent } from './first-test/first-test.component';
import {FirstNgLibModule} from '../../../projects/kjf/first-ng-lib/src/lib/first-ng-lib.module'; // 开发环境
// import {FirstNgLibModule} from '@kjf/first-ng-lib'; // 生产环境

@NgModule({
    declarations: [FirstTestComponent],
    imports: [
        CommonModule,
        FirstNgLibModule
    ],
    exports: [FirstTestComponent]
})
export class TestModuleModule { }
