import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; import { NewsList } from './pages/news-list/news-list'; import { NewsDetail } from './pages/news-detail/news-detail'; import { Favorites } from './pages/favorites/favorites'; import { NewsManager } from './pages/news-manager/news-manager'; import { Contact } from './pages/contact/contact';

export const routes: Routes = [{path:'',component:Home},{path:'noticias',component:NewsList},{path:'noticias/:id',component:NewsDetail},{path:'favoritos',component:Favorites},{path:'gestionar',component:NewsManager},{path:'contacto',component:Contact},{path:'**',redirectTo:''}];
