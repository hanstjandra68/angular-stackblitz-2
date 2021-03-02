import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Data } from "../../data.model";
import { GlobalvarService } from "../../globalvar.service";

@Component({
  selector: "app-hal3",
  templateUrl: "./hal3.component.html",
  styleUrls: ["./hal3.component.css"]
})
export class Hal3Component implements OnInit {
  semuaData: Data[];
  tempData: Data;
  status_ok = "favorite";
  constructor(private router: Router, public globalVar: GlobalvarService) {
    for (let i = 0; i < this.globalVar.allData.length - 1; i++) {
      if (this.globalVar.getStatus(i) == this.status_ok) {
        this.semuaData.push(this.globalVar.allData[i]);
      }
    }
  }

  ngOnInit() {}
}
