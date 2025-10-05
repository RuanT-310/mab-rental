import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rental',
  // Localização sugerida: src/app/features/rentals/pages/add-rental/
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent implements OnInit {
  addRentalForm!: FormGroup;
  isSubmitting: boolean = false;

  // Listas de opções para os selects
  statusOptions = ["Recentes", "Venda", "Aluguel"];
  typeOptions = ["Casa", "Apartamento", "Terreno"];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Inicializa o formulário reativo com todas as validações
    this.addRentalForm = this.fb.group({
      status: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^[0-9,.]+$/)]], // Exemplo de pattern para preço
      title: ['', Validators.required],
      location: ['', Validators.required],
      sector: ['', Validators.required],
      sqft: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // Apenas números
      bed: ['', [Validators.required, Validators.min(0)]],
      bath: ['', [Validators.required, Validators.min(0)]],
      contact: ['', Validators.required],
      // Nota: Input 'file' precisa de tratamento especial no Angular para validação/upload
      images: [null, Validators.required] 
    });
  }

  // Getter para acesso fácil aos controles no template
  get f() {
    return this.addRentalForm.controls;
  }

  // MOCK: Simula a chamada userReq.createRental()
  async mockCreateRental(data: any): Promise<{ success: boolean; error?: any }> {
    console.log('Mock: Tentativa de cadastro do imóvel:', data);
    // Simula sucesso após 1 segundo
    return new Promise(resolve => {
      setTimeout(() => {
        if (Math.random() > 0.1) { // 90% de chance de sucesso
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
    
    // Na vida real, você precisaria de um FormData para enviar arquivos
    const dataToSend = this.addRentalForm.value;

    try {
      await this.mockCreateRental(dataToSend);
      alert('Imóvel cadastrado com sucesso! ✅');
      this.addRentalForm.reset();
      // Redireciona para a home após o sucesso
      this.router.navigate(['/']); 
    } catch (error) {
      alert('Erro ao cadastrar imóvel. Tente novamente.');
    } finally {
      this.isSubmitting = false;
    }
  }
}