import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-parallax-image',
  standalone: true,
  imports: [ImageModalComponent],
  templateUrl: './parallax-image.component.html',
  styleUrl: './parallax-image.component.scss'
})
export class ParallaxImageComponent implements OnInit {
    @Input() imageSrc: string = '';
    @Input() top: number = 0;
    @Input() left: number = 0;
  
  
    offset = 0;
    constructor(private dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.onScroll(); // Initial calculation on load
    }
  
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
      const scrollPosition = window.pageYOffset;
      this.offset = scrollPosition * 0.5; // Adjust the multiplier to control the parallax speed
    }
  
    openImageModal(): void {
      this.dialog.open(ImageModalComponent, {
        data: { imageSrc: this.imageSrc },
        panelClass: 'custom-dialog-container'
      });
    }
  }