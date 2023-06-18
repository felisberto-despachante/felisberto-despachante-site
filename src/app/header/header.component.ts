import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPage!: string;
  isDropdownOpen = false;
  pages: string[] = ['home', 'arquivos'];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.updateCurrentPage();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentPage();
      }
    });
  }

  private updateCurrentPage() {
    this.currentPage = this.router.url;
    this.cdr.detectChanges();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    if (this.currentPage.toString() != '/' + option) {
      this.currentPage = option;
      this.isDropdownOpen = false;
      this.router.navigate([option]);
    }
  }

  goToSection(section: string) {
    // this.router.navigateByUrl('home#' + section);

    // @ts-ignore
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
}
