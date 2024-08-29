import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { WelcomeSectionComponent } from './sections/welcome-section/welcome-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { AccomodationSectionComponent } from './sections/accomodation-section/accomodation-section.component';
import { ActivitySectionComponent } from './sections/activity-section/activity-section.component';
import { OmgevingSectionComponent } from './sections/omgeving-section/omgeving-section.component';
import { TarievenSectionComponent } from './sections/tarieven-section/tarieven-section.component';
 
import { SectionComponent } from './sections/section/section.component';
import { ParallaxImageComponent } from './parallax-image/parallax-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderBarComponent,WelcomeSectionComponent, ContactSectionComponent, AccomodationSectionComponent, ActivitySectionComponent, OmgevingSectionComponent, TarievenSectionComponent, SectionComponent,ParallaxImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tiswatis';
  images = [{
    imageSrc: 'assets/foto/a.jpg',
    top:5,
    left:5,
  },{
    imageSrc: 'assets/foto/b.jpg',
    top:300,
    left:5,
  },{
    imageSrc: 'assets/foto/g.jpg',
    top:600,
    left:5,
  },{
    imageSrc: 'assets/foto/h.jpg',
    top:900,
    left:5,
  },{
    imageSrc: 'assets/foto/i.jpg',
    top:1200,
    left:5,
  },{
    imageSrc: 'assets/foto/j.jpg',
    top:1500,
    left:5,
  },{
    imageSrc: 'assets/foto/k.jpg',
    top:1800,
    left:5,
  },{
    imageSrc: 'assets/foto/l.jpg',
    top:2100,
    left:5,
  },{
    imageSrc: 'assets/foto/m.jpg',
    top:2400,
    left:5,
  },{
    imageSrc: 'assets/foto/n.jpg',
    top:2700,
    left:5,
  },{
    imageSrc: 'assets/foto/q.jpg',
    top:3000,
    left:5,
  },{
    imageSrc: 'assets/foto/d.jpg',
    top:3300,
    left:5,
  },{
    imageSrc: 'assets/foto/e.jpg',
    top:3600,
    left:5,
  }];
}
