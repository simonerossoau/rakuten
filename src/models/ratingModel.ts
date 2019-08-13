export default class ratingModel {

    public Average: number;
    public Scale: number;

    constructor() {
        this.Average=0,
        this.Scale=0;
    }

    public apiToModel(data):ratingModel {

        var rating = new ratingModel();

        rating.Average = data.average;
        rating.Scale = data.scale;

        return rating
    }
}