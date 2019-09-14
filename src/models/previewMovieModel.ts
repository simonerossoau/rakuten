import movieClassificationModel from './movieClassificationModel';
import movieImageModel from './movieImageModel';
import labelsModel from './labelsModel';
import ratingModel from './ratingModel';
import highlightedScoreModel from './highlightedScoreModel';

export default class previewMovieModel {

    public type: string;
    public id: string;
    public Numerical_id: number;
    public Title: string;
    public Year: number;
    public Duration: number;
    public Label_price: string;
    public Classification: movieClassificationModel;
    public images: movieImageModel;
    public Highlighted_score: highlightedScoreModel;
    public Rating: ratingModel;
    public Labels: labelsModel;

    constructor() {
        this.type = "";
        this.id = "";
        this.Numerical_id = 0;
        this.Title = "";
        this.Year = 0;
        this.Duration = 0;
        this.Label_price = "";
        this.Classification = new movieClassificationModel();
        this.images = new movieImageModel();
        this.Highlighted_score = new highlightedScoreModel();
        this.Rating = new ratingModel();
        this.Labels = new labelsModel;
    }

    public apiToModel(data): previewMovieModel {

        var movie = new previewMovieModel();

        movie.type = data.type;
        movie.id = data.id;
        movie.Numerical_id = data.numerical_id;
        movie.Title = data.title;
        movie.Year = data.year;
        movie.Duration = data.duration;
        movie.Label_price = data.label;
        movie.Classification = data.classification;
        movie.images = data.images;
        movie.Highlighted_score = data.highlighted_score;
        movie.Rating = data.rating;
        movie.Labels = data.labels;

        return movie;
    }
}