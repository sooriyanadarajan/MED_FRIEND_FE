import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers!: HttpHeaders;
  private fileheader!: { headers: HttpHeaders };

  constructor(
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService
  ) { }

  private setHeaders(): void {
    const authToken = localStorage.getItem('auth_token') || '';
    this.headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      Authorization: authToken
    });

    this.fileheader = {
      headers: new HttpHeaders({
        Authorization: authToken
      })
    };
  }

  public clearCookie(): void {
    localStorage.clear();
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  private handleErrors(err: any): Observable<never> {
    if (err.status === 401) {
      // this.helper.LogOut();
    } else {
      if (err?.error?.inputValid) {
        err.error.message = err.error.errors[0];
      }
      // this.message.error(err.error.message);
      return throwError(err);
    }
    return throwError(err);
  }

  public get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    this.setHeaders();
    return this.http
        .get(url, { headers: this.headers, params })
        .pipe(catchError(this.handleErrors));
  }

  public getPublic(url: string, params: HttpParams = new HttpParams(), headers?: HttpHeaders): Observable<any> {
    return this.http
        .get(url, { params, headers })
        .pipe(catchError(this.handleErrors));
  }

  public post(url: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    this.setHeaders();
    return this.http
        .post(url, body, { headers: this.headers, params })
        .pipe(catchError(this.handleErrors));
  }

  public postPublic(url: string, body: Object = {}, params: HttpParams = new HttpParams(), headers?: HttpHeaders): Observable<any> {
    return this.http
        .post(url, body, { headers, params })
        .pipe(catchError(this.handleErrors));
  }

  public put(url: string, body: Object = {}): Observable<any> {
    return this.http.put(url, body).pipe(catchError(this.handleErrors));
  }

  public delete(url: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    this.setHeaders();
    return this.http
        .delete(url, { headers: this.headers, params })
        .pipe(catchError(this.handleErrors));
  }

  public deleteMethod(url: string, body: Object = {}): Observable<any> {
    this.setHeaders();
    return this.http
        .delete(url, { headers: this.headers, body })
        .pipe(catchError(this.handleErrors));
  }

  public patch(url: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    this.setHeaders();
    return this.http
        .patch(url, body, { headers: this.headers, params })
        .pipe(catchError(this.handleErrors));
  }

}