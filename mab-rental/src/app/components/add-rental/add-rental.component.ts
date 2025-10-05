import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-add-rental',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass], 
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent implements OnInit {
  addRentalForm!: FormGroup;
  isSubmitting: boolean = false;

  statusOptions = ["Recentes", "Venda", "Aluguel"];
  typeOptions = ["Casa", "Apartamento", "Terreno"];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Inicializa o formulário reativo
    this.addRentalForm = this.fb.group({
      status: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^[0-9,.]+$/)]],
      title: ['', Validators.required],
      location: ['', Validators.required],
      sector: ['', Validators.required],
      sqft: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      bed: ['', [Validators.required, Validators.min(0)]],
      bath: ['', [Validators.required, Validators.min(0)]],
      contact: ['', Validators.required],
      images: [null, Validators.required]
    });
  }

  get f() {
    return this.addRentalForm.controls;
  }

  // MOCK: Simula a chamada userReq.createRental()
  async mockCreateRental(data: any): Promise<{ success: boolean; error?: any }> {
    console.log('Mock: Tentativa de cadastro do imóvel:', data);
    return new Promise(resolve => {
      setTimeout(() => {
        if (Math.random() > 0.1) {
          resolve({ success: true });
        } else {
          resolve({ success: false, error: 'Erro de rede simulado' });
        }
      }, 1000);
    });
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;

    if (this.addRentalForm.invalid) {
      this.addRentalForm.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }
    
    const dataToSend = this.addRentalForm.value;

    try {
      await this.mockCreateRental(dataToSend);
      alert('Imóvel cadastrado com sucesso! ✅');
      this.addRentalForm.reset();
      this.router.navigate(['/']);
    } catch (error) {
      alert('Erro ao cadastrar imóvel. Tente novamente.');
    } finally {
      this.isSubmitting = false;
    }
  }
}