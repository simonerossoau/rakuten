import imageModel from "./imageModel";

export default class movieModel {

    /**
     * general infos
     */
    public title: string;
    public year: number;
    public short_plot: string;
    public priceOptions?: any;    //to do priceOptionModel

    /**
     * for the API calls
     */
    public type: string;
    public classificationId: string;

    /**
     * for the movie page
     */
    public plot: string;
    public actors: any[]     //to do actorsModel and other data
    public images: imageModel

    constructor() {

        this.title = "",
            this.year = 0,
            this.short_plot = "",
            this.type = "",
            this.classificationId = ""
        this.plot = "",
            this.actors = [],
            this.images = new imageModel();
    }

    public static apiToModel(data): movieModel {

        var movie = new movieModel();

        movie.title = data.title;
        movie.year = data.year;
        movie.short_plot = data.short_plot;
        movie.type = data.type;
        movie.classificationId = data.id;
        movie.plot = data.plot;
        movie.actors = data.actors;
        movie.images = data.images;

        return movie
    }
}