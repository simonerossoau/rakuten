export default class imageModel {

    public snapshot: string;
    public artwork: string;

    constructor() {
        this.snapshot="",
        this.artwork="";
    }

    public apiToModel(data):imageModel {

        var image = new imageModel();

        image.snapshot = data.average;
        image.artwork = data.scale;

        return image
    }
}