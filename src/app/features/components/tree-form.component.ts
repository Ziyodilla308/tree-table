import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TreeStore} from '../store/tree.store';
import { CommonModule } from '@angular/common';
import {ITree} from '../../shared/models/tree.model';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-tree-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  template: `
    <button type="submit" routerLink="/table"><- Back to Table</button>
    <div class="flex">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form">
        <div>
          <input type="text" class="border p-2 w-full" formControlName="name" placeholder="Tree name"/>
        </div>
        <div>
          <input type="text" class="border p-2 w-full" formControlName="description" placeholder="Description"/>
        </div>
        <button type="submit" class="sbt_btn">Add Task</button>
      </form>
    </div>
  `,
  styles: `
    .flex {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    .flex .form div input {
      padding: 0.5rem;
      width: 15rem;
      outline: none;
      border: 1px solid #ddd;
      border-radius: 2rem
    }

    .flex .form .sbt_btn {
      width: 100%;
      margin-top: 1rem;
      padding: 0.5rem 0.5rem;
      border-radius: 2rem;
      outline: none;
      cursor: pointer;
      border: 1px solid #ddd;
      transition: 0.2s ease-in-out;
    }

    .flex .form .sbt_btn:hover {
      background: #aeecdf;
    }

    .required {
      color: red;
    }

  `
})
export class TreeFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(TreeStore);
  private router = inject(Router);

  public form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert("Field is required");
      return;
    }
    const raw = this.form.getRawValue();

    const tree: ITree = {
      name: raw.name as string,
      description: raw.description as string,
      createdAt: new Date().toISOString()
    };

    this.store.addTask(tree);
    this.router.navigate(['/table']);
    this.form.reset();
  }

}
