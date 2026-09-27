import { Component, signal } from '@angular/core'; import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header { menuOpen=signal(false); toggle(){this.menuOpen.update(v=>!v);} close(){this.menuOpen.set(false);} }
