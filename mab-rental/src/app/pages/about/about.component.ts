import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// Assumindo que CtaComponent também é standalone
import { CtaComponent } from '../../components/cta/cta.component'; 

interface TeamMember {
  imgSrc: string;
  delay: string;
  name: string;
  designation: string;
}

@Component({
  selector: 'app-about',
  // SINTAXE MODERNA
  standalone: true, 
  imports: [CommonModule, RouterLink, CtaComponent], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutImgSrc: string = '/about.jpg';
  
  // Caminhos das imagens da equipe (para uso no loop)
  teamMembers: TeamMember[] = [
    { imgSrc: '/team-1.jpg', delay: '0.1s', name: 'Full Name 1', designation: 'Designation 1' },
    { imgSrc: '/team-2.jpg', delay: '0.3s', name: 'Full Name 2', designation: 'Designation 2' },
    { imgSrc: '/team-3.jpg', delay: '0.5s', name: 'Full Name 3', designation: 'Designation 3' },
    { imgSrc: '/team-4.jpg', delay: '0.7s', name: 'Full Name 4', designation: 'Designation 4' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}