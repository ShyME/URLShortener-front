# URLShortener-Front

Simple front-end application hosted by default on `http://localhost:4200` made with a bit of Angular and bootstrap for URL Shortener service. 

## POST long urls

At home directory there's an input area for an URL to be shortened. With a button click a POST request is made to a back-end server located at `http://localhost:8080` with a raw String describing long URL to be shortened. Once the response is received a shortened link appears with a Copy button next to it.

## GET short urls

Navigating to `http://localhost:4200/{{id}}` with id param recognized by a back-end server you get redirected to the URL connected with that ID. Failing to find given ID results in a redirect to home directory of the front-end app.

## Example

![Example screenshot](https://i.imgur.com/PuJjaRC.png)
