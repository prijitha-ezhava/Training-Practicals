import { CrudService } from './../crud.service';
import { Company } from './../icompany';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies : Company[] = [];

  constructor(public crudService: CrudService, private router : Router) { }

  ngOnInit(): void {  

    // subscribing getAll() to retrieve all companies data
    this.crudService.getAll().subscribe((data : Company[])=>{
      console.log(data);
      this.companies = data;
  })
  }

  //delete button click event method
  deleteData(company:Company){
    this.crudService.delete(company.id).subscribe(data=>{
      this.crudService.getAll().subscribe((data:Company[])=>{
        this.companies=data;
      });
    });
  };


  //Edit button click event method
  editData(company:Company):void{
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['update']);
  }

  //
  detailData(company :Company):void{
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['details']);
  }
  
}
