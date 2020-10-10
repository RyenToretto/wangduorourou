import {
    Component,
    OnInit,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';

@Component({
    selector: 'kjf-first-ng-lib',
    templateUrl: './first-ng-lib.component.html',
    styleUrls: ['./first-ng-lib.component.scss']
})
export class FirstNgLibComponent implements OnInit {

    @Input() data: CategoryNode[];
    @Output() selection: EventEmitter<CategoryNode> = new EventEmitter();
    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    selectedCategory: CategoryNode;

    constructor(private resolver: ComponentFactoryResolver) {}

    ngOnInit(): void {}

    clickChip(_, category): void {
        this.removeChild();

        this.selectedCategory = (this.selectedCategory && this.selectedCategory.id === category.id) ? null : category;
        this.selection.emit(this.selectedCategory);

        this.insertChild();
    }

    emitSelection(category: CategoryNode | null): void {
        if (category) {
            this.selection.emit(category);
        } else {
            this.selection.emit(this.selectedCategory);
        }
    }

    insertChild(): void {
        if (this.selectedCategory && this.selectedCategory.children.length) {
            const compFactory = this.resolver.resolveComponentFactory(FirstNgLibComponent);

            const component = this.vc.createComponent(compFactory);
            component.instance.data = this.selectedCategory.children;
            component.instance.selection.subscribe(event => this.emitSelection(event));
        }
    }

    trackByFn(item: CategoryNode): string | number { return item.id; }

    removeChild(): void { this.vc.clear(); }
}

export interface CategoryNode {
    name: string;
    id: string | number;
    children: CategoryNode[];
}
