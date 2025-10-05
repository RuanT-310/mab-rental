// ContactComponent.ts (Permanece o mesmo)

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Router, RouterLink } from '@angular/router'; // Adicionando RouterLink para uso no template

@Component({
  selector: 'app-contact',
  standalone: true,
  // Mantemos CommonModule e ReactiveFormsModule para a validação e pipes
  imports: [CommonModule, ReactiveFormsModule, RouterLink], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting: boolean = false;
  
  // Dados estáticos de contato
  contactInfo = [
    { iconClass: 'fa-map-marker-alt', label: 'Endereço', value: 'Folha 17, Marabá - PA', delay: '0.1s' },
    { iconClass: 'fa-envelope-open', label: 'Email', value: 'AlugueAqui@gmail.com', delay: '0.3s' },
    { iconClass: 'fa-phone-alt', label: 'Telefone', value: '(94) 99234-5678', delay: '0.5s' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Inicializa o formulário reativo
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Getter para acesso fácil aos controles
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.isSubmitting = true;
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }

    console.log('Dados do formulário de contato:', this.contactForm.value);
    
    // Simular envio de API
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Em breve retornaremos o contato.');
      this.contactForm.reset();
      this.isSubmitting = false;
    }, 1500);
  }
}