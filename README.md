# url-service

Basic service for spoofing urls.

### Usage

#### Installation
```
git clone https://github.com/tylerhaun/url-service.git
cd url-service
npm i
node .
```


#### API
```
POST /api/v0/urls
  body: 
    url: url to redirect to
    path: the path of the service that redirects to url

GET /api/v0/urls
  response:
    urls: [{Url}]
    
GET /{url}
  response:
    status: 302
    redirection
```


##### TODO
Add in metrics for urls.  Keep track of data for each click and add graphs for data analytics for each url.
