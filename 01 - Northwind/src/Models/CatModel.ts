class CatModel {
	public name: string = ""; // Default value
    public age: number | undefined = undefined; // Can get number or undefined
    public color?: string; // Optional property
    public food!: string; // Can get string or undefined
    public owner: string; // "strictNullChecks": false inside tsconfig.json
}

export default CatModel;

