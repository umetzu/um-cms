import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ba-wizard-step',
  templateUrl: './baWizardStep.html',
})
export class BaWizardStep implements OnInit {

    // @Input() menuItem: any;
    selected: boolean = true;
    form: FormGroup;
        

    tab: any = {
        title: "tttttt",
        select: undefined,
        submit: undefined,
        isComplete: false,
        isAvailiable: true,
        prevTab: undefined,
        setPrev: undefined
    };

    ngOnInit() {
        //this.addTab(tab);
    }

    select(isSelected): void {
        if (isSelected) {
        this.selected = true;
        } else {
        this.selected = false;
        }
    }

    submit(): void {
    }

    isComplete(): Boolean {
        return this.form ? this.form.valid : true;
    }

    isAvailiable(): void {
        //return tab.prevTab ? tab.prevTab.isComplete() : true;
    }

    setPrev(pTab): void {
        this.tab.prevTab = pTab;
    }
}