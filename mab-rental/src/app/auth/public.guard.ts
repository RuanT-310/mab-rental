import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

// MOCK: Serviço de Autenticação (Na vida real, você o injetaria)
const isUserAuthenticated = (): boolean => {
    // Implementação real: checar um token ou estado no AuthService
    const isLoggedIn = true; // <<< Mude para 'true' para testar o acesso
    return isLoggedIn;
};

export const publicGuard: CanActivateFn = (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    
    // 1. Injeta o Router para navegação programática
    const router = inject(Router);
    
    // 2. Lógica de Checagem
    if (!isUserAuthenticated()) {
        // Usuário logado: Permite o acesso à rota
        return true; 
    } else {
        // Usuário NÃO logado: Redireciona para a página de login
        // A função router.parseUrl('/login') cria a UrlTree necessária para o redirecionamento
        return router.parseUrl('/'); 
    }
};