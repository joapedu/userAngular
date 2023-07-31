import { AfterViewInit, Component } from "@angular/core";
import BRMenu from "@govbr-ds/core/dist/components/menu/menu";

@Component({
  selector: "br-menu",
  templateUrl: "./menu.component.html",
})
export class BrMenuComponent implements AfterViewInit {
  instance: any;

  menuItems = [
    {
      iconClass: "fa-home",
      label: "Home",
    },
    {
      iconClass: "fa-cubes",
      label: "Nível 1",
      children: [
        {
          iconClass: "fa-address-book",
          label: "Nível 2",
          children: [
            {
              iconClass: "fa-tree",
              label: "Nível 3",
              children: [
                {
                  iconClass: "fa-tree",
                  label: "Nível 4",
                  href: "javascript:void(0)",
                },
              ],
            },
            {
              iconClass: "fa-tree",
              label: "Nível 3",
              href: "javascript:void(0)",
            },
          ],
        },
        {
          iconClass: "fa-heart",
          label: "Nível 2",
          href: "javascript:void(0)",
        },
      ],
    },
    {
      iconClass: "fa-file-archive",
      label: "Nível 1",
    },
  ];

  ngAfterViewInit() {
    this.instance = new BRMenu(".br-menu", document.querySelector(".br-menu"));
  }
}
