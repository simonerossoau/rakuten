import ribbonsModel from './ribbonsModel';

export default class movieImageModel {

    public artwork: string;
    public snapshot: string;
    public Ribbons: ribbonsModel;

    constructor() {

        this.artwork = "";
        this.snapshot = "";
        this.Ribbons = new ribbonsModel(); 
    }

    public apiToModel(data):movieImageModel{
        
        var image = new movieImageModel();

        image.artwork = data.artwork;
        image.snapshot = data.snapshot;
        image.Ribbons = data.ribbons;

        return image; 
    }

    public modelToApi(data){

    }
}