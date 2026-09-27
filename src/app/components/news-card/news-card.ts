import { Component, input } from '@angular/core'; import { RouterLink } from '@angular/router'; import { News } from '../../models/news';

@Component({
  imports: [RouterLink],
  selector: 'app-news-card',
  styleUrl: './news-card.scss',
  templateUrl: './news-card.html',
})
export class NewsCard { news=input.required<News>(); }
