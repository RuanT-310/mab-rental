import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Para o botão, se necessário
// Importação do CallAction, assumindo que ele também é standalone
import { CtaComponent } from '../../components/cta/cta.component'; 

interface Agent {
  fullName: string;
  designation: string;
  imageSrc: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedInUrl: string;
}

@Component({
  selector: 'app-agents',
  standalone: true, // Componente moderno e independente
  // Importa componentes ou módulos necessários diretamente
  imports: [CtaComponent], 
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  // Lista de agentes com caminhos de imagem
  agents: Agent[] = [
    {
      fullName: "Ricardo Diniz",
      designation: "Corretor",
      imageSrc: "/team-rdm.jpg", // Atualizado para caminho de assets/
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Winy Soares",
      designation: "Corretor",
      imageSrc: "/team-winy.jpg",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Ruan Vieira",
      designation: "Corretor",
      imageSrc: "/team-ruan.png",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização aqui
  }
}