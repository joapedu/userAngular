import { Component } from "@angular/core";

@Component({
  selector: "br-header",
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css']
})
export class BrHeaderComponent {
  image = {
    src: "../../assets/branco.png",
    alt: "logo",
  };

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
