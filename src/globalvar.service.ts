import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private someArray: Array<{ judul: string; isi: string; tanggal: Date }> = [];
  constructor() {}
}
