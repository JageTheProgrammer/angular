import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'Navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.css'],
})
export class Navigationbar {

    isScrolled = false;
    isMenuOpen = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 100;
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        document.body.style.overflow = '';
    }

}