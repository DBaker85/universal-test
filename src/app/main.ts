import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import './polyfills.ts'
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';


platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
