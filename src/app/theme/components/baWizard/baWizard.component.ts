import { Component, ElementRef, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-wizard',
  templateUrl: './baWizard.html',
  styleUrls: ['./baWizard.scss'],
})

export class BaWizard implements OnInit {
  tabs: any[] = [];
  tabNum: number = 0;
  progress: number = 0;
    
  ngOnInit() {
  }
  
  constructor(private _elementRef: ElementRef, private _state: GlobalState) {
  }

  addTab(tab) {
      tab.setPrev(this.tabs[this.tabs.length - 1]);
      this.tabs.push(tab);
      this.selectTab(0);
  }

  selectTab(tabNum) {
    this.tabs[this.tabNum].submit();
    if (this.tabs[tabNum].isAvailiable()) {
      this.tabNum = tabNum;
      this.tabs.forEach(function (t, tIndex) {
        tIndex === this.tabNum ? t.select(true) : t.select(false);
      });
    }
  }

  isFirstTab(): boolean {
    return this.tabNum === 0;
  }

  isLastTab(): boolean {
    return this.tabNum === this.tabs.length - 1 ;
  }

  nextTab(): void {
    this.selectTab(this.tabNum + 1);
  }

  previousTab(): void {
    this.selectTab(this.tabNum - 1);
  }

  calcProgress(): void {
    this.progress = ((this.tabNum + 1) / this.tabs.length) * 100;
  }

  //angular.bind(this, function () {return this.tabNum;});//, calcProgress);

}
