import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News as NewsModel } from '../models/news';

@Injectable({providedIn:'root'})
export class NewsService { readonly items=signal<NewsModel[]>([]); private key='pressroom-news'; constructor(private http:HttpClient){const s=localStorage.getItem(this.key); if(s)this.items.set(JSON.parse(s)); else this.http.get<NewsModel[]>('assets/data/news.json').subscribe(x=>this.items.set(x));} private save(x:NewsModel[]){this.items.set(x);localStorage.setItem(this.key,JSON.stringify(x));} get(id:number){return this.items().find(x=>x.id===id);} add(x:Omit<NewsModel,'id'|'author'|'date'>){this.save([{...x,id:Date.now(),author:'Redacción Digital',date:new Date().toISOString().slice(0,10)},...this.items()]);} remove(id:number){this.save(this.items().filter(x=>x.id!==id));} }
