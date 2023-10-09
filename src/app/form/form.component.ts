import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    description: '',
    price: null,
    inventory: null,
    unit: '',
    supplier: '',
    active: false,
  };

  onSubmit() {
    // Handle form submission here, e.g., send data to an API or perform other actions.
    console.log('Form submitted with data:', this.formData);
    
    this.formData = {
      name: '',
      description: '',
      price: null,
      inventory: null,
      unit: '',
      supplier: '',
      active: false,
    };
  }  
}
