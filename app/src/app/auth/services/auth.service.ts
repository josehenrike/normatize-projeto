import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Usuários mocados para teste
  private mockUsers: User[] = [
    {
      id: 1,
      name: 'Administrador',
      email: 'admin@normatize.com',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Usuário Teste',
      email: 'usuario@normatize.com',
      role: 'user'
    }
  ];

  // Senhas mocadas (em produção, isso seria hasheado e verificado no backend)
  private mockPasswords: { [email: string]: string } = {
    'admin@normatize.com': 'admin123',
    'usuario@normatize.com': 'user123'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verificar se há um usuário logado no localStorage (apenas no browser)
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  login(credentials: LoginCredentials): Observable<{ success: boolean; user?: User; message?: string }> {
    return new Observable(observer => {
      // Simular delay de requisição
      setTimeout(() => {
        const user = this.mockUsers.find(u => u.email === credentials.email);
        const expectedPassword = this.mockPasswords[credentials.email];

        if (user && expectedPassword === credentials.password) {
          // Login bem-sucedido
          this.currentUserSubject.next(user);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          observer.next({ success: true, user });
        } else {
          // Credenciais inválidas
          observer.next({
            success: false,
            message: 'Email ou senha incorretos'
          });
        }
        observer.complete();
      }, 1500);
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }

  // Método para recuperação de senha (mocado)
  sendPasswordRecovery(email: string): Observable<{ success: boolean; message: string }> {
    return new Observable(observer => {
      setTimeout(() => {
        const userExists = this.mockUsers.some(u => u.email === email);

        if (userExists) {
          observer.next({
            success: true,
            message: 'Instruções de recuperação foram enviadas para seu email!'
          });
        } else {
          observer.next({
            success: false,
            message: 'Email não encontrado em nossa base de dados.'
          });
        }
        observer.complete();
      }, 1500);
    });
  }
}
