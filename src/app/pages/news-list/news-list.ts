import { Component, inject } from '@angular/core'; import { CommonModule } from '@angular/common'; import { NewsCard } from '../../components/news-card/news-card'; import { NewsService } from '../../services/news';

@Component({
  imports: [CommonModule,NewsCard],
  selector: 'app-news-list',
  styleUrl: './news-list.scss',
  templateUrl: './news-list.html',
})
export class NewsList { service=inject(NewsService); }
