import { AfterViewInit, Component, HostListener } from '@angular/core';   
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SkillsComponent, CommonModule, FormsModule, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Shuaib';
  contactData = {
    name: '',
    email: '',
    message: ''
  };
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
      if ((section as HTMLElement).offsetTop < scrollPosition) {
        section.classList.add('visible');
      }
    });
  }

  ngAfterViewInit() {
    this.onScroll(); // Trigger visibility on initial load as well
  }

  onSubmit() {
    console.log('Form submitted', this.contactData);
  }
}
