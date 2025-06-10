import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ITree} from '../../shared/models/tree.model';

@Injectable({ providedIn: 'root' })
export class TreeService {
  private readonly baseUrl = 'http://localhost:3000/tree';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITree[]> {
    return this.http.get<ITree[]>(this.baseUrl);
  }

  createTask(task: ITree): Observable<ITree> {
    return this.http.post<ITree>(this.baseUrl, task);
  }
}
