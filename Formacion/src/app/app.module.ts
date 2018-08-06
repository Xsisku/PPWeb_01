import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Services
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './services/videos.service';

// Router
import { APP_ROUTING } from './app.routes';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ListaDeVideosComponent } from './components/lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { CursoCComponent } from './components/cursoC/cursoC.component';
import { CursoComponent } from './components/cursoC/curso/curso.component';
import { MenuCursoComponent } from './components/cursoC/menu-curso/menu-curso.component';
import { DescripcionCursoComponent } from './components/cursoC/descripcion-curso/descripcion-curso.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { VideosCursoComponent } from './components/cursoC/videos-curso/videos-curso.component';
import { MaterialComponent } from './components/cursoC/material/material.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { RegistroVComponent } from './components/registro-v/registro-v.component';
import { UserComponent } from './components/user/user.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { UserResumeComponent } from './components/user/user-resume/user-resume.component';
import { UserDetallesComponent } from './components/user/user-detalles/user-detalles.component';
import { UserNewsComponent } from './components/user/user-news/user-news.component';
import { UserCompradoComponent } from './components/user/user-comprado/user-comprado.component';
import { UserNavComponent } from './components/user/user-nav/user-nav.component';
import { UserHistoryComponent } from './components/user/user-history/user-history.component';
import { PopupComponent } from './components/popup/popup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent,
    HomeComponent,
    FormulariosComponent,
    CursoCComponent,
    CursoComponent,
    MenuCursoComponent,
    DescripcionCursoComponent,
    FooterComponent,
    VideosCursoComponent,
    MaterialComponent,
    ResetPassComponent,
    RegistroVComponent,
    UserComponent,
    AcercadeComponent,
    UserResumeComponent,
    UserDetallesComponent,
    UserNewsComponent,
    UserCompradoComponent,
    UserNavComponent,
    UserHistoryComponent,
    AcercadeComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
