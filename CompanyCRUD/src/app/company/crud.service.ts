import { ICompany } from './icompany';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = "http://localhost:3000";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient : HttpClient) { }

  //Add new Company
  create(company: any) : Observable<ICompany>{
    company.totalBranch = company.companyBranch.length;
    return this.httpClient.post<ICompany>(this.apiServer +'/companies/',JSON.stringify(company), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  //Get all Companies List
  getAll(): Observable<ICompany[]>{
    return this.httpClient.get<ICompany[]>(this.apiServer + '/companies/')
    .pipe(catchError(this.errorHandler))
  }

  //Get Company by ID
  getById(id: string) : Observable<ICompany>{
    return this.httpClient.get<ICompany>(this.apiServer + '/companies/' +id)
    .pipe(catchError(this.errorHandler))
  }

  //Edit or Update Company Details
  update(id: string, company: any) : Observable<ICompany>{
    return this.httpClient.put<ICompany>(this.apiServer + '/companies/' + id, JSON.stringify(company) ,this.httpOptions)
    .pipe(catchError(this.errorHandler))
  } 

  //Delete Company data
  delete(id: number) : Observable<ICompany>{
    return this.httpClient.delete<ICompany>(this.apiServer + '/companies/' +id, this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }


  //Error Handler
  errorHandler(error: any) {
   let errorMsg = '';

    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message;
    }
    else{
      errorMsg = `ErrorCode : ${error.status}\nMessage: $ {error.Message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
