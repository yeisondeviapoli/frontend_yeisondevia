import { Component, inject } from '@angular/core'; import { CommonModule } from '@angular/common'; import { ActivatedRoute, RouterLink } from '@angular/router'; import { NewsService } from '../../services/news'; import { Favorites } from '../../services/favorites';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-news-detail',
  styleUrl: './news-detail.scss',
  templateUrl: './news-detail.html',
})
export class NewsDetail { service=inject(NewsService); favorites=inject(Favorites); id=Number(inject(ActivatedRoute).snapshot.paramMap.get('id')); news=this.service.get(this.id); toggle(){if(this.news)this.favorites.toggle(this.news);} }
