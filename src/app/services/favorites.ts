import { Injectable, signal } from '@angular/core';
import { News } from '../models/news';

@Injectable({providedIn:'root'}) export class Favorites { readonly items=signal<News[]>(JSON.parse(localStorage.getItem('pressroom-favorites')||'[]')); toggle(n:News){const x=this.items().some(i=>i.id===n.id)?this.items().filter(i=>i.id!==n.id):[...this.items(),n];this.items.set(x);localStorage.setItem('pressroom-favorites',JSON.stringify(x));} has(id:number){return this.items().some(x=>x.id===id);} }
