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
  semuaData: Data[] = [
    {
      judul: "andaikan",
      isi: "aku bersinar",
      tanggal: "19-12-2000",
      status: "favorite",
      index: 0
    }
  ];
  tempData: Data;
  status_ok = "favorite";
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData.length = 0;
    for (let i = 0; i < this.globalVar.allData.length - 1; i++) {
      if (this.globalVar.allData[i].status == this.status_ok) {
        this.semuaData.push(this.globalVar.allData[i]);
      }
    }
  }

  ngOnInit() {
    this.semuaData.length = 0;

    for (let i = 0; i < this.globalVar.allData.length - 1; i++) {
      if (this.globalVar.allData[i].status == this.status_ok) {
        this.semuaData.push(this.globalVar.allData[i]);
      }
    }
  }
}
