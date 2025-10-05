import { Component, OnInit } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';

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
  imports: [CtaComponent],
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  // Lista de agentes com caminhos de imagem atualizados para 'assets/'
  agents: Agent[] = [
    {
      fullName: "Ricardo Diniz",
      designation: "Corretor",
      imageSrc: "assets/img/team-rdm.jpg",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Winy Soares",
      designation: "Corretor",
      imageSrc: "assets/img/team-winy.jpg",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
    {
      fullName: "Ruan Vieira",
      designation: "Corretor",
      imageSrc: "assets/img/team-ruan.png",
      facebookUrl: "",
      instagramUrl: "",
      linkedInUrl: "",
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // Aqui você faria a chamada à API para carregar a lista de corretores
    // Ex: this.agentService.loadAgents().subscribe(data => this.agents = data);
  }
}