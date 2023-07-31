import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import BRSelect from "@govbr-ds/core/dist/components/select/select";

@Component({
  selector: "br-select",
  templateUrl: "./select.component.html",
})
export class BrSelectComponent implements AfterViewInit, AfterViewChecked {
  @Input() label: string = "";
  @Input() id: string = "";
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() data: any[] = [];
  @Output() selectedEvent: any = new EventEmitter<any>();

  instance: any; // Instância do componente angular
  selected: any; // Contém a(s) opção(ões) selecionada(s)

  constructor(private brSelect: ElementRef) {}

  /**
   * Inicializa o comportamento do componente somente após todo o HTML ser renderizado na tela
   */
  ngAfterViewInit() {
    this.instance = new BRSelect(
      ".br-select",
      this.brSelect.nativeElement.querySelector(".br-select")
    );
  }

  setSelected() {
    this.selectedEvent.emit(this.instance.selected);
  }

  getSelected() {
    this.selected = this.instance.selected;
  }

  /**
   * Após uma atualização dinâmica do componente select, é necessário fazer um reset do componente.
   */
  ngAfterViewChecked() {
    if (this.instance) {
      this.instance.resetOptionsList();
    }
  }
}
