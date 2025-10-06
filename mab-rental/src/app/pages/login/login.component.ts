import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  // SINTAXE MODERNA
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NgClass], // Adicionamos as importações necessárias
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async mockLogin(data: any): Promise<{ error?: string }> {
    console.log('Tentativa de login com:', data);
    if (data.email === 'user@test.com' && data.password === '123456') {
      return {};
    } else {
      return { error: 'usuario ou senha errados' };
    }
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }

    const data = this.loginForm.value;
    const { error } = await this.mockLogin(data);
    
    if (error) {
      window.alert('Usuário ou senha errados');
      this.loginForm.reset();
    } else {
      this.router.navigate(['/']);
    }

    this.isSubmitting = false;
  }
}