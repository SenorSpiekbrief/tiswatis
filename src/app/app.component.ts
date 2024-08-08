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
}
