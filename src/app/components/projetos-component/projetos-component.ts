import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projetos-component',
  imports: [RouterLink],
  templateUrl: './projetos-component.html',
  styleUrl: './projetos-component.css'
})
export class ProjetosComponent {

  @Input() nome = '';
  @Input() descricao = '';
  @Input() urlFoto = '';

}
