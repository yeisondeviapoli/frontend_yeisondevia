import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News as NewsModel } from '../models/news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  readonly items = signal<NewsModel[]>([]);
  private readonly key = 'pressroom-news-v2';
  constructor(private http: HttpClient) {
    let saved: NewsModel[] = [];
    try { saved = JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { saved = []; }
    if (saved.length > 0) this.items.set(saved);
    else this.http.get<NewsModel[]>('assets/data/news.json').subscribe(data => { this.items.set(data); localStorage.setItem(this.key, JSON.stringify(data)); });
  }
  private save(data: NewsModel[]) { this.items.set(data); localStorage.setItem(this.key, JSON.stringify(data)); }
  get(id: number) { return this.items().find(item => item.id === id); }
  add(input: Omit<NewsModel, 'id' | 'author' | 'date'>) { this.save([{ ...input, id: Date.now(), author: 'Redaccion Digital', date: new Date().toISOString().slice(0, 10) }, ...this.items()]); }
  remove(id: number) { this.save(this.items().filter(item => item.id !== id)); }
}
