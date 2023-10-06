import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  colors: any[] = [];
  selectedColor: string = '';
  selectedColorName: string = '';
  selectedColorCode: string = '';

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    // Get Data from services then convert to objects
    this.colorService.getColors().subscribe((data: any) => {
      this.colors = data.colors;
    });
  }

  //Holds the individuel Color information
  previewColor(color: any): void {
    this.selectedColor = color.hex_code;
    this.selectedColorName = color.name;
    this.selectedColorCode = color.color_code;
  }

  //Converts the Hex code to RGB
  calculateLuminance(hexColor: string): number {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }

  // If the luminance > 0.5 indicating light colors will return black otherwise white
  determineFontColor(hexColor: string): string {
    const luminance = this.calculateLuminance(hexColor);
    return luminance > 0.5 ? 'black' : 'white';
  }
}
