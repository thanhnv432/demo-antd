import { Component, OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [
    NzGridModule,
    ReactiveFormsModule
  ]
})
export class WelcomeComponent implements OnInit {
  id: string = '';
  form!: FormGroup<any>;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      status: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.fb);
    
  }

}
