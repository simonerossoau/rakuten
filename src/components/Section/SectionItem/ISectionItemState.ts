import movieModel from "src/models/movieModel";

export default interface ISectionItemState {
    data: movieModel;
    isTooltipOpen: boolean;
    tooltipPosition: string;
}