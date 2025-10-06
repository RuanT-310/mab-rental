import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Validador customizado para garantir que as senhas coincidam.
 */
export function passwordsMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    // Se as senhas existirem e não coincidirem, retorna o erro
    if (control && matchingControl && control.value !== matchingControl.value) {
      matchingControl.setErrors({ notMatch: true });
      return { notMatch: true };
    } else if (matchingControl?.errors && matchingControl.errors['notMatch']) {
      // Limpa o erro se as senhas voltarem a coincidir
      matchingControl.setErrors(null);
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // RouterLink para o link de login
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      // Aplica o validador customizado no nível do FormGroup
      validator: passwordsMatchValidator('password', 'confirmPassword') 
    });
  }

  // Getter para acesso fácil aos controles no template
  get f() {
    return this.signupForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }

    console.log('Dados do cadastro:', this.signupForm.value);
    
    // Simular envio de API
    try {
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        alert('Cadastro realizado com sucesso! 🎉');
        this.signupForm.reset();
        this.router.navigate(['/login']); 
    } catch (error) {
        alert('Erro ao cadastrar. Tente novamente.');
    } finally {
        this.isSubmitting = false;
    }
  }
}