import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Necessário para pipes e classes dinâmicas

interface Breadcrumb {
  label: string;
  url: string;
  isLast: boolean;
}

@Component({
  selector: 'app-header',
  // SINTAXE MODERNA
  standalone: true, 
  imports: [CommonModule, RouterLink], // Importamos o CommonModule para o @if funcionar no loop
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'Home';
  breadcrumbs: Breadcrumb[] = [];
  headerImg: string = 'assets/img/header.jpg';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
      if (breadcrumbs.length > 0) {
        this.pageTitle = breadcrumbs[breadcrumbs.length - 1].label;
      } else {
        this.pageTitle = 'Home';
      }
    });
  }

  private firstLetterUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = routeURL;
      
      if (label === '') {
        label = 'Home';
      } else {
        label = this.firstLetterUpper(label);
      }

      const newBreadcrumbs = [...breadcrumbs];
      
      if (label !== 'Home' || newBreadcrumbs.length === 0) {
          newBreadcrumbs.push({ label, url, isLast: false });
      }

      if (child.firstChild) {
          return this.buildBreadcrumbs(child, url, newBreadcrumbs);
      } else {
          if (newBreadcrumbs.length > 0) {
              newBreadcrumbs[newBreadcrumbs.length - 1].isLast = true;
          }
          return newBreadcrumbs;
      }
    }
    return breadcrumbs;
  }
}