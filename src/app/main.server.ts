import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { Request, Response } from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as path from 'path';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const port = 3000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'public');


app.use('/', express.static('public', {index: false}));


app.get('/', function (req, res) {
  res.render('../public/index.html',
  {
    req,
    res,
    // preboot: false, // turn on if using preboot
    // baseUrl: '/',
    // requestUrl: req.originalUrl,
    // originUrl: `http://localhost:${ app.get('port') }`
  }
  );
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log(path.join(__dirname))
})
