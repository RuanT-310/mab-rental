import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  // Mock do estado de carregamento do botão
  isSubmitting: boolean = false;

  // Injete o FormBuilder e o Router
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Inicializa o formulário reativo com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Acessa os controles do formulário facilmente no template
  get f() {
    return this.loginForm.controls;
  }

  // MOCK: Simula a função de login (substitui o useAuth().login())
  async mockLogin(data: any): Promise<{ error?: string }> {
    console.log('Tentativa de login com:', data);
    // Simula a lógica de autenticação
    if (data.email === 'user@test.com' && data.password === '123456') {
      return {}; // Sucesso (sem erro)
    } else {
      return { error: 'usuario ou senha errados' }; // Falha
    }
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;

    // Se o formulário for inválido, marca os campos como tocados para exibir erros e para.
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }

    // Se válido, chama o mock de login
    const data = this.loginForm.value;
    const { error } = await this.mockLogin(data);
    
    if (error) {
      window.alert('Usuário ou senha errados');
      this.loginForm.reset();
      // Opcional: manter o valor do email/senha ao dar erro
      // this.f['email'].setValue(data.email); 
    } else {
      // Navega para a home ou dashboard em caso de sucesso
      this.router.navigate(['/']);
    }

    this.isSubmitting = false;
  }
}