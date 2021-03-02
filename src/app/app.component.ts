import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { Data } from "../data.model";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  semuaData: Data[];
  tempData: Data;
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData = this.globalVar.allData;
  }

  textjudul = "";
  textisi = "";
  tanggal: Date;

  name = "Angular " + VERSION.major;

  tambahdata() {
    this.tempData = {
      judul: this.textjudul,
      isi: this.textisi,
      tanggal: this.tanggal.toString(),
      status: "tidak favorite",
      index: this.semuaData.length
    };
    this.globalVar.saveData(this.tempData);
    console.log("berhasil");
  }
}
