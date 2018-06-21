export class tempDate {

    private mLocation: String;
    private mName: String
    private mStart: Date;
    private mEnd: Date;

    constructor(pLocation: String, pName: String, pStart: Date, pEnd: Date) {
        this.mLocation = pLocation;
        this.mName = pName;
        this.mStart = pStart;
        this.mEnd = pEnd;
    }

    get location(): String {
        return this.mLocation;
    }

    get name(): String {
        return this.mName;
    }

    get start(): Date {
        return this.mStart;
    }

    get end(): Date {
        return this.mEnd;
    }

}