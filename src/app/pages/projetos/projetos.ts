import { Component } from '@angular/core';
import { ProjetosComponent } from "../../components/projetos-component/projetos-component";
import { Projeto } from '../../model/projeto';

@Component({
  selector: 'app-projetos',
  imports: [ProjetosComponent],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {

 projetos: Projeto[] = [
    {
      nome: 'Receitas simples',
      descricao: 'Página estática com receitas favoritas e fotos.',
      urlFoto: 'https://gestaoempresarialfatec.wordpress.com/wp-content/uploads/2019/03/projeto.jpg'
    },
    {
      nome: 'Lista de tarefas',
      descricao: 'To-do minimalista usando HTML, CSS e JS.',
      urlFoto: 'https://i3.wp.com/rz2-marketing.s3.us-east-1.amazonaws.com/blog-pt/planejamento-de-projetos-capa.webp?w=1199&resize=1199,768&ssl=1'
    },
    {
      nome: 'Landing page',
      descricao: 'Página com chamada para ação.',
      urlFoto: 'https://smartconsulting.com.br/wp-content/uploads/2021/07/Ferramenta-de-gestao-de-projetos-1-1024x576.jpg'
    },
    {
      nome: 'Galeria de fotos',
      descricao: 'Grid responsivo de imagens.',
      urlFoto: 'https://picsum.photos/id/1015/800/450'
    },
    {
      nome: 'Conversor de moedas',
      descricao: 'Exemplo simples com API.',
      urlFoto: 'https://picsum.photos/id/1005/800/450'
    }
  ];
}

