class ColorsService {

    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }

}

// Similar to Singleton - a single object on the entire system
const colorsService = new ColorsService();

export default colorsService;
