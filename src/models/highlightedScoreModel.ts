export default class highlightedScoreModel {
    
    public Score: number;
    public AmountOfVotes: number;
    public FormattedAmountOfVotes: number;

    constructor() {
        this.Score = 0,
            this.AmountOfVotes = 0;
        this.FormattedAmountOfVotes = 0;
    }

    public apiToModel(data): highlightedScoreModel {

        var score = new highlightedScoreModel();

        score.Score = data.score;
        score.AmountOfVotes = data.amount_of_votes;
        score.FormattedAmountOfVotes = data.formatted_amount_of_votes;

        return score
    }
}