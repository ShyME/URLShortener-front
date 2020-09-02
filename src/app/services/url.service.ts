import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlResponse } from 'src/app/model/url-response';
import { Constants } from 'src/app/util/constants';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) { }

  getLongUrl(shortUrl: string) {
    return this.httpClient.get<UrlResponse>(Constants.dataApiUrl + shortUrl);
  }

  shortenUrl(longUrl: string) {
    return this.httpClient.post<UrlResponse>(Constants.dataApiUrl, longUrl);
  }
}
