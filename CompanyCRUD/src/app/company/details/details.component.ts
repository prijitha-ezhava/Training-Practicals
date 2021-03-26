import { Company, CompanyBranch } from './../icompany';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  companyobj:any
  branches:any;
  constructor(public crudService: CrudService, private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
      this.crudService.getById(1).subscribe(data=>{
        console.log(data);
        this.companyobj=data;
        this.branches=this.companyobj.CompanyBranch;
        console.log(this.branches);
      })
  }

}
