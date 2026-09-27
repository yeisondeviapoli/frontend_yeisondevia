import { Component, inject } from '@angular/core'; import { CommonModule } from '@angular/common'; import { NewsCard } from '../../components/news-card/news-card'; import { Favorites as FavoritesService } from '../../services/favorites';

@Component({
  imports: [CommonModule,NewsCard],
  selector: 'app-favorites',
  styleUrl: './favorites.scss',
  templateUrl: './favorites.html',
})
export class Favorites { service=inject(FavoritesService); }
