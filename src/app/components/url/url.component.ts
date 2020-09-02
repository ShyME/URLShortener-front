import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { UrlService } from 'src/app/services/url.service';
import { UrlResponse } from 'src/app/model/url-response';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  urlParam: string = "";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private urlService: UrlService
  ) { }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('shortUrl');
    console.log("Long Url: ")

    this.urlService.getLongUrl(this.urlParam)
      .subscribe((data: UrlResponse) => {
        this.document.location.href=data.longUrl;
    });
  }
}
