import { Component, inject } from '@angular/core';
import { TreeStore } from '../store/tree.store';
import { NgForOf, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [NgForOf, CommonModule],
  template: `
    <div class="flex justify-end mb-4">
      <button (click)="goToForm()" class="bg-green-600 text-white px-4 py-2 rounded">
        + Add Task
      </button>
    </div>
    <table id="customers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let task of store.tasks()">
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.createdAt | date: 'short' }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: `
    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    #customers td,
    #customers th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #customers tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    #customers tr:hover {
      background-color: #ddd;
    }

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #7ee0e3;
      color: white;
    }
  `,
})
export class TreeTableComponent {
  store = inject(TreeStore);
  router = inject(Router);

  goToForm() {
    this.router.navigate(['/form']);
  }
}
