import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutImgSrc: string = 'assets/img/about.jpg'; // Caminho para a imagem
  
  // Caminhos das imagens da equipe (para uso no loop)
  teamMembers = [
    { imgSrc: 'assets/img/team-1.jpg', delay: '0.1s', name: 'Full Name 1', designation: 'Designation 1' },
    { imgSrc: 'assets/img/team-2.jpg', delay: '0.3s', name: 'Full Name 2', designation: 'Designation 2' },
    { imgSrc: 'assets/img/team-3.jpg', delay: '0.5s', name: 'Full Name 3', designation: 'Designation 3' },
    { imgSrc: 'assets/img/team-4.jpg', delay: '0.7s', name: 'Full Name 4', designation: 'Designation 4' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}