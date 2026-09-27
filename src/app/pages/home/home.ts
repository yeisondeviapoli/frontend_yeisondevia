import { Component, inject } from '@angular/core'; import { CommonModule } from '@angular/common'; import { RouterLink } from '@angular/router'; import { NewsCard } from '../../components/news-card/news-card'; import { NewsService } from '../../services/news';

@Component({
  imports: [CommonModule,RouterLink,NewsCard],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home { service=inject(NewsService); featured=()=>this.service.items().filter(n=>n.featured).slice(0,3); }
