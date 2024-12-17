import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/7/7d/BaalbekPropylaea.jpg',
    'https://img.remediosdigitales.com/5c5ec6/6869671723_5c82a1d41e_b/450_1000.jpg',
    'https://images.mnstatic.com/ac/04/ac04d78d61165decbcb141f50185cb7d.jpg',
    'https://thumbs.dreamstime.com/b/taormina-italia-de-junio-ruinas-del-teatro-griego-cl%C3%A1sico-en-sicilia-151700605.jpg',
    'https://media.istockphoto.com/id/1494139888/es/foto/teatro-griego-antiguo-en-taormina-sicilia.jpg?s=612x612&w=0&k=20&c=XTITdqYpaVveU4KsqM9bfH0otSo-KiDGifzbxKUGzuw=',
    'https://thumbs.dreamstime.com/b/ruinas-del-teatro-griego-cl%C3%A1sico-en-taormina-sicilia-151700045.jpg'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
