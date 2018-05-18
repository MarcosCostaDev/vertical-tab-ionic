import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { VerticalTabNav } from '..';


@Component({
  selector: 'ion-vertical-tab',
  templateUrl: 'ion-vertical-tab.html'
})
export class IonVerticalTabComponent {

  protected select: boolean = false;

  public get selected() {
    return this.select;
  }
 tabClassSelect: string = ""

  public toogleSelected() {
    this.select = !this.select;
    this.tabClassSelect = this.selected ? this.ClassSelected : this.ClassNotSelected;
  }

  public setSelected(){
    this.select = true;
    this.tabClassSelect = this.ClassSelected;
  }

  @Input()
  TabIcon: string = "";

  @Input()
  TabClassIcon: string = "";

  @Input()
  TitleDirection: "none" | "top" | "bottom" = "none";

  @Input()
  TabPage: any;

  @Input()
  ClassSelected: string = "is-selected";

  @Input()
  ClassNotSelected: string = "is-not-selected";

  @Input()
  TabParams: any = undefined;

  @Input()
  TabTitle: string = "";

  @Output()
  OnTabSelected: EventEmitter<VerticalTabNav> = new EventEmitter<VerticalTabNav>();


  constructor() {
    this.tabClassSelect = this.ClassNotSelected;
  }

  onTabTap() {
    this.OnTabSelected.emit({ page: this.TabPage, params: this.TabParams });

    if(this.TabPage)
    {    
      this.setSelected();
    }

  }

}
