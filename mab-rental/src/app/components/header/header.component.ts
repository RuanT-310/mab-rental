import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
  isLast: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Define a variável para o título e a lista do breadcrumb
  pageTitle: string = 'Home';
  breadcrumbs: Breadcrumb[] = [];
  headerImg: string = 'assets/img/header.jpg'; // Substitua pelo caminho real da sua imagem no Angular

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Escuta eventos de navegação para atualizar o breadcrumb e o título
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ).subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
      // Define o título da página baseado no último item do breadcrumb
      if (breadcrumbs.length > 0) {
        this.pageTitle = breadcrumbs[breadcrumbs.length - 1].label;
      } else {
        this.pageTitle = 'Home';
      }
    });
  }

  // Função auxiliar para capitalizar a primeira letra, como no React
  private firstLetterUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Constrói a lista de breadcrumbs recursivamente
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

      // Obtém o rótulo do breadcrumb. Aqui estou usando o caminho da URL.
      // Em uma aplicação real, você usaria dados do `data` da rota (ex: `child.snapshot.data['title']`).
      let label = routeURL;
      
      if (label === '') {
        label = 'Home'; // Rótulo para a rota raiz
      } else {
        label = this.firstLetterUpper(label);
      }

      // Garante que o rótulo 'Home' só apareça uma vez no início
      const newBreadcrumbs = [...breadcrumbs];
      
      if (label !== 'Home' || newBreadcrumbs.length === 0) {
          newBreadcrumbs.push({ label, url, isLast: false });
      }

      // Apenas o último item da rota real deve ser marcado como 'active'
      if (child.firstChild) {
          return this.buildBreadcrumbs(child, url, newBreadcrumbs);
      } else {
          // Marca o último item
          if (newBreadcrumbs.length > 0) {
              newBreadcrumbs[newBreadcrumbs.length - 1].isLast = true;
          }
          return newBreadcrumbs;
      }
    }
    return breadcrumbs;
  }
}