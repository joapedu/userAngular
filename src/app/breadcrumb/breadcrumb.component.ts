import { AfterViewInit, Component } from "@angular/core";
import BRBreadcrumb from "@govbr-ds/core/dist/components/breadcrumb/breadcrumb";

@Component({
  selector: "br-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
})
export class BrBreadcrumbComponent implements AfterViewInit {
  instance: any;

  crumbs = [
    { label: "Página inicial", href: "#" },
    { label: "Tela Anterior", href: "#" },
    { label: "Tela Anterior 2", href: "#" },
    { label: "Tela Anterior 3", href: "#" },
    { label: "Tela Anterior 4", href: "#" },
    { label: "Tela Atual" },
  ];

  ngAfterViewInit(): void {
    // resetBreadcrumbs
    this.instance = new BRBreadcrumb(
      ".br-breadcrumb",
      document.querySelector(".br-breadcrumb")
    );
  }
}
