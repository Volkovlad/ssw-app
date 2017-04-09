import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  private apiUrl = 'http://localhost:8888/api';

  constructor (private http: Http) {

  }

  public getAllTasks(): Observable<Array<ITask>> {
    return this.http.get(this.apiUrl + '/tasks')
        .map(this.extractData)
        .catch(this.handleError);
  }

  public createTask(task: ITask): Observable<void> {
    return this.http.post(this.apiUrl + '/tasks/', task)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public removeTask(id: number | string): Observable<void> {
    return this.http.delete(this.apiUrl + '/tasks/' + id)
        .map(this.extractData)
        .catch(this.handleError)
  }

  public updateTask(id: number | string, task: ITask): Observable<void> {
    return this.http.put(this.apiUrl + '/tasks/' + id, task)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
