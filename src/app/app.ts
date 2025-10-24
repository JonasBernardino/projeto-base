import { Component, signal } from '@angular/core';
import { HeroComponent } from "./components/hero-component/hero-component";
import { HeaderComponent } from "./components/header-component/header-component";
import { SobreMimComponent } from "./components/sobre-mim-component/sobre-mim-component";
import { ProjetosComponent } from "./components/projetos-component/projetos-component";
import { ContatoComponent } from "./components/contato-component/contato-component";
import { FooterComponent } from "./components/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, SobreMimComponent, ProjetosComponent, ContatoComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
