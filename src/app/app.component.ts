import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TopContentComponent } from './components/top-content/top-content.component';
import { SelectorComponent } from './components/selector/selector.component';
import { GeneralResultsComponent } from './components/general-results/general-results.component';
import { ProfileResultsComponent } from './components/profile-results/profile-results.component';
import { FilterResultsComponent } from './components/filter-results/filter-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TopContentComponent, SelectorComponent, GeneralResultsComponent, ProfileResultsComponent, FilterResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
