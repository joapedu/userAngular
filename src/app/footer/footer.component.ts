import { Component } from "@angular/core";

@Component({
  selector: "br-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ['./footer.component.css']
})
export class BrFooterComponent {
  license =
    "Feito por João Eduardo Braga, todo o conteúdo deste site está publicado sob MIT LICENSE";

  social = {
    networks: [
      {
        href: "https://github.com/joapedu/userAngular",
        image: "assets/branco.png",
        description: "logo",
        target: "_blank",
      },
    ],
  };
}
