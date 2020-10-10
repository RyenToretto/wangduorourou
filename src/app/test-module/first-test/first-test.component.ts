import { Component, OnInit } from '@angular/core';
import {CategoryNode} from '../../../../projects/kjf/first-ng-lib/src/lib/first-ng-lib.component'; // 开发环境
// import {CategoryNode} from '@kjf/first-ng-lib'; // 生产环境

@Component({
    selector: 'kjf-first-test',
    templateUrl: './first-test.component.html',
    styleUrls: ['./first-test.component.scss']
})
export class FirstTestComponent implements OnInit {

    public output: string;

    public categoryData: CategoryNode[] = [
        { id: 1, name: '豪杰', children: [
                { id: 3, name: '阿斯加德', children: [
                        { id: 9, name: '索尔', children: [
                            ]}
                    ]},
                { id: 4, name: '无敌浩克', children: []},
                { id: 5, name: '钢铁侠', children: []},
                { id: 6, name: '绯红女巫', children: []}
            ]},
        { id: 2, name: '女侠', children: [
                { id: 7, name: '神奇女侠', children: []},
                { id: 8, name: '惊奇队长', children: []},
            ]},
    ];

    constructor() { }

    ngOnInit(): void {
    }


    onCategorySelect(category: CategoryNode): void {
        if (category) {
            this.output = `已经选中的标签名称:  <strong>${category.name}</strong>  (id: ${category.id})`;

        } else {
            this.output = '请选择一个标签!';
        }
    }
}
