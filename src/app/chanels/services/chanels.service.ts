import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap }  from 'rxjs';
import { environment } from 'src/environments/environment';
import { getLocaleCurrencyCode } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ChanelsService {
  public collection$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {

  }

  public refreshCollection(id: number){
    this.http.get(`${this.urlApi}/messages/chanel/${id}`).subscribe((data) =>{
      this.collection$.next(data);
    })
  }

  public getAllChanels(): Observable<any> {
    return this.http.get(`${this.urlApi}/chanels`);
  }


  getMessageByChanel(id: number): Observable<any> {
    return this.http.get(`${this.urlApi}/messages/chanel/${id}`).pipe(
      tap((data) => {
        this.collection$.next(data);
      })
    );
  }

  public createNewChanel(Chanel: any): Observable<any>{
    return this.http.post(`${this.urlApi}/chanels`, Chanel);
  }

  public updateChanel(id: number, Chanel: any): Observable<any>{
    return this.http.put(`${this.urlApi}/chanels/${id}`, Chanel);
  }

  deleteChanel(id: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/chanels/${id}`);
  }

}
