
// All properties must match exactly to the data received by the server!
class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
    public image: FileList;
}

export default ProductModel;