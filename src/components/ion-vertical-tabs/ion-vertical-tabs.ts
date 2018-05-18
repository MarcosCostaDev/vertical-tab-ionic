import { Component, Input, ContentChildren, ViewChild, Output, EventEmitter, QueryList } from '@angular/core';
import { IonVerticalTabComponent, VerticalTabNav, VerticalTabChange, IonHeaderVerticalTabComponent, IonFooterVerticalTabComponent } from '..';
import { Nav, Header, Footer } from 'ionic-angular';

/**
 * Generated class for the IonVerticalTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-vertical-tabs',
  templateUrl: 'ion-vertical-tabs.html'
})
export class IonVerticalTabsComponent {
  @ViewChild(Nav) 
  nav: Nav;

  @ViewChild("tabHeader")
  tabHeader:Header;

  @ViewChild("tabFooter")
  tabFooter:Footer;



  @Input()
  directionTab: "start" | "center" | "end" = "start";

  @Input()
  showBackButton:boolean = false;

  @Input()
  backButtonIcon:string = "arrow-back";

  @Input()
  backButtonClass:string = "";

  @Input()
  animation:boolean = false;

  @Input()
  side: "left" | "right" = "left";

  @Input()
  cssClass:string = "vertical-tab-background";

  @ContentChildren(IonVerticalTabComponent)
  verticalTabItems: QueryList<IonVerticalTabComponent>;

  @ContentChildren(IonVerticalTabComponent)
  verticalHeaderTabItems: QueryList<IonHeaderVerticalTabComponent>;

  @ContentChildren(IonVerticalTabComponent)
  verticalFooterTabItems: QueryList<IonFooterVerticalTabComponent>;

  @Output()
  tabChange:EventEmitter<VerticalTabChange> = new EventEmitter<VerticalTabChange>();

  @Output()
  backClick:EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  private getAllTabs(): Array<IonVerticalTabComponent>
  {  
      var array = this.verticalTabItems.toArray();
      return array.concat(this.verticalHeaderTabItems.toArray(), this.verticalFooterTabItems.toArray());
  }

  ngAfterContentInit() {

    if(this.verticalFooterTabItems.length == 0)
    {
      this.tabFooter.setElementStyle("display", "none");
    }

    if(this.verticalHeaderTabItems.length == 0)
    {
      this.tabHeader.setElementStyle("display", "none");
    }

    this.getAllTabs().forEach((tab, index) => {
      if(index == 0)
      {
        this.nav.setRoot(tab.TabPage);
        tab.setSelected();
      }
      tab.OnTabSelected.subscribe((verticalTabSelected: VerticalTabNav) => this.onTabSelect(index, tab, verticalTabSelected ));
    });

  }

  private onTabSelect(index:number, tab: IonVerticalTabComponent, item: VerticalTabNav) {
   
    if(item.page)
    {
      var animation = undefined;
      if(this.animation)
      {
        animation = {animate: true, direction: "forward" }
      }
      
      this.nav.setRoot(item.page, item.params, animation);

      this.tabChange.emit({
        tabNav: item,
        index: index
      });
  
      this.getAllTabs().filter((tab, i)=> i != index).forEach(p => {
        if(p.selected)
        {
          p.toogleSelected()
        }
      });
    }
    
  }

  onBackClick(){
    this.backClick.emit();
  }


  
}
