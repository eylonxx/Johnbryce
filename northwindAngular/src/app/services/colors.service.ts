import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' // Create ColorsService object for the entire app.
})
export class ColorsService {

    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
    
}

