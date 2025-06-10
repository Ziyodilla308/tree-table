import {inject, Injectable, signal} from '@angular/core';
import { TreeService } from '../services/tree.service';
import { ITree } from '../../shared/models/tree.model';

@Injectable({ providedIn: 'root' })
export class TreeStore {
  private treeService = inject(TreeService);

  private _tasks = signal<ITree[]>([]);
  readonly tasks = this._tasks.asReadonly();

  constructor() {
    this.loadTasks();
  }

  loadTasks() {
    this.treeService.getTasks().subscribe((data) => {
      this._tasks.set(data);
    });
  }

  addTask(tree: ITree) {
    this.treeService.createTask(tree).subscribe((newTree) => {
      this._tasks.update(trees => [...trees, newTree]);
    });
  }
}
