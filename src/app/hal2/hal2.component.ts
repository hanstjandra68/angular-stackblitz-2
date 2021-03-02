import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Data } from "../../data.model";
import { GlobalvarService } from "../../globalvar.service";

@Component({
  selector: "app-hal2",
  templateUrl: "./hal2.component.html",
  styleUrls: ["./hal2.component.css"]
})
export class Hal2Component implements OnInit {
  semuaData: Data[];
  tempData: Data;
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData = this.globalVar.allData;
  }

  ngOnInit() {
    this.semuaData = this.globalVar.allData;
  }

  favorite(index: number) {
    this.globalVar.editStatus(index);
  }
}
