import { Injectable, signal } from '@angular/core';
import { ITree } from '../../shared/models/tree.model';

@Injectable({ providedIn: 'root' })
export class TreeStore {
  private _tasks = signal<ITree[]>([]);
  readonly tasks = this._tasks.asReadonly();

  constructor() {
    this._tasks.set([
      {
        id: crypto.randomUUID(),
        name: 'Sample Tree',
        description: 'For Example',
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  addTask(tree: ITree) {
    const withId = { ...tree, id: crypto.randomUUID() };
    this._tasks.update(tasks => [...tasks, withId]);
  }
}
