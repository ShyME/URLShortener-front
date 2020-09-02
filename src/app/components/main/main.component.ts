import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { UrlResponse } from 'src/app/model/url-response';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private longUrl: string = "";
  private shortUrl: string = "";

  constructor(private urlService: UrlService) { }

  shortenUrl(inputUrl: string) {
    console.log("Shorten url call with input: " + inputUrl);
    this.urlService.shortenUrl(inputUrl)
      .subscribe((data: UrlResponse) => {
        this.longUrl = data.longUrl;
        this.shortUrl = Constants.rootUrl + data.shortUrl;
      });
  }

  gotResponse(): boolean {
    return this.shortUrl != "";
  }

  ngOnInit(): void {
    
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
