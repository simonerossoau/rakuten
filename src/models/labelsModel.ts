export default class labelsModels {

    public AudioQualities: any;
    public HdrTypes: any;
    public PurchaseTypes: any;
    public VideoQuality: any;

    constructor() {
        this.AudioQualities = undefined;
        this.HdrTypes = undefined
        this.PurchaseTypes = undefined;
        this.VideoQuality = undefined;
    }
    public apiToModel(data) {

        var labels = new labelsModels();

        labels.AudioQualities = data.audio_qualities;
        labels.HdrTypes = data.hdr_types;
        labels.PurchaseTypes = data.purchase_types;
        labels.VideoQuality = data.video_qualities;

        return labels
    }

}