import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // ✅ Importar el enrutador
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes'; // ✅ Importar las rutas

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), ...appConfig.providers] // ✅ Usar `routes` correctamente
}).catch(err => console.error(err));
