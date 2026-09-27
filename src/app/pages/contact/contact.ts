import { Component } from '@angular/core'; import { CommonModule } from '@angular/common'; import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact { sent=false; form={name:'',email:'',message:''}; submit(){this.sent=true;} }
