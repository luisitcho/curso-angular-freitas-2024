import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
  //@ts-ignore
  // plano: IPlano = {
  //     infos: {
  //         tipo: 'simples',
  //         preco: `R$ 100, 00/Mês`,
  //     },
  // };

  // Maneira de mudar o nome dos inputs, deve ser chamado assim no html também
  @Input('tipoPlano') tipoPlano: string = '';
  @Input({ required: true, alias: 'precoPlano' }) precoPlano: number = 0;

  // @Input() tipoPlano: string = '';
  // @Input() precoPlano: number = 0;

  buttonClicked(item: string) {
    console.log(item)
  }
}
