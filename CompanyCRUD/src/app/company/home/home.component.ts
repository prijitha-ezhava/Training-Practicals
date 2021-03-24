import { CrudService } from './../crud.service';
import { ICompany } from './../icompany';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies : ICompany[] = [];

  constructor(public crudService: CrudService, private router : Router) { }

  ngOnInit(): void {  

    // subscribing getAll() to retrieve all companies data
    this.crudService.getAll().subscribe((data : ICompany[])=>{
      console.log(data);
      this.companies = data;
  })
  }

  //delete button click event method
  deleteData(company:ICompany){
    this.crudService.delete(company.id).subscribe(data=>{
      this.crudService.getAll().subscribe((data:ICompany[])=>{
        this.companies=data;
      });
    });
  };


  //Edit button click event method
  editData(company:ICompany):void{
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['update']);
  }

  
}
