import { Component, inject } from '@angular/core'; import { CommonModule } from '@angular/common'; import { FormsModule } from '@angular/forms'; import { NewsService } from '../../services/news';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-news-manager',
  styleUrl: './news-manager.scss',
  templateUrl: './news-manager.html',
})
export class NewsManager { service=inject(NewsService); form:any={title:'',category:'Tecnología',description:'',image:'',content:'',featured:false}; submit(){if(!this.form.title||!this.form.description||!this.form.content)return;this.service.add(this.form);this.form={title:'',category:'Tecnología',description:'',image:'',content:'',featured:false};} }
