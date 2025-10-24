import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero-component/hero-component";
import { SobreMimComponent } from "../../components/sobre-mim-component/sobre-mim-component";
import { ProjetosComponent } from "../../components/projetos-component/projetos-component";
import { ContatoComponent } from "../../components/contato-component/contato-component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SobreMimComponent, ProjetosComponent, ContatoComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
