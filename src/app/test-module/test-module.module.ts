import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTestComponent } from './first-test/first-test.component';



@NgModule({
    declarations: [FirstTestComponent],
    imports: [
        CommonModule
    ],
    exports: [FirstTestComponent]
})
export class TestModuleModule { }
