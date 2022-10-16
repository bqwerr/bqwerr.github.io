import { Component, Input, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/http/data-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profile: any;

  constructor(
    public dataApi: DataApiService,
  ) { }

  async ngOnInit() {
    this.profile = await this.dataApi.getProfile();
  }

  async downloadResume(): Promise<void> {
    const pdf: any = await this.dataApi.getBase64CV();
    const byteCharacters = atob(pdf.resume);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new Blob([byteArray], { type: 'application/pdf;base64' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.setAttribute('download', `${this.profile.name} CV.pdf`.replace(/\s/g, ''));
    a.click();
  }

}
