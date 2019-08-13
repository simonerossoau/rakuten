import ribbonsModel from './ribbonsModel';

export default class movieImageModel {

    public Artwork: string;
    public Snapshot: string;
    public Ribbons: ribbonsModel;

    constructor() {

        this.Artwork = "";
        this.Snapshot = "";
        this.Ribbons = new ribbonsModel(); 
    }

    public apiToModel(data){
        
        var image = new movieImageModel();

        image.Artwork = data.artwork;
        image.Snapshot = data.snapshot;
        image.Ribbons = data.ribbons;

        return image; 
    }

    public modelToApi(data){

    }
}