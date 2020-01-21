# Hello world of system integration

This is just another mandatory assignment for university...

But hey let's make it exciting :) 

## Getting started

Setup your mac for this awesome project.. Warning we do some nasty host hacks...

``` yarn setup:mac ```

Start the web part of this example

``` docker-compose up -D ```

If you are a crazy person who likes to live dangerously (Proceed with caution)

``` yarn start:app ``` (Requires iOS development setup...)

## Packages / Services

* Web = React based web interface for proxy
* Proxy = Proxy server to have a centralised proxy between our "different" services
* Balance = Laravel based API for providing balance
* Taxes = Spring boot based kotlin project for providing taxes
* App = React Native app just to show off :) 

## Urls when setup correctly

* [React Web app](http://web.docker)
* [Reverse proxy](http://traefik.docker)
* [Balance](http://balance.docker)
* [Taxes](http://taxes.docker)
* [Proxy](http://proxy.docker)

## Technologies used

* React
* React Native
* Node.js
* PHP (Laravel)
* Spring

## Languages used

* JavaScript
* TypeScript
* PHP
* Kotlin

## Data exchange formats used

* XML
* JSON

## Repo strategies

* Monorepo
