import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/service-worker';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  window.addEventListener("load", () => {
    registerSW();
  });
  
  async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('safety-worker.js', { scope: '/' });
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }