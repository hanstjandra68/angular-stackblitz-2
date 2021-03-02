import { Injectable } from "@angular/core";
import { Data } from "./data.model";

@Injectable()
export class GlobalvarService {
  allData: Data[] = [];
  constructor() {}

  public initdata(data: Data[]) {
    this.allData = data;
  }
  saveData(note: Data) {
    this.allData.push(note);
  }
  editStatus(index: number) {
    this.allData[index].status = "favorite";
  }
}
