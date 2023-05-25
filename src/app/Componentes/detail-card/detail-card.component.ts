import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDataService } from 'src/app/Services/pokemon-data.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent {
  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(
    private dataService: PokemonDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getPokemon(params['id']);
    });
  }

  getPokemon(id: any) {
    this.dataService.getData(id).subscribe(
      (res) => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
