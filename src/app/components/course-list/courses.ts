export interface Correlation {
    organiser: string;
    curriculum: string;
    actions: any[];
}

export interface Room {
    number: string;
    building: string;
    campus: string;
    actions: any[];
}

export interface Lecturer {
    title?: any;
    firstName?: any;
    lastName: string;
    actions: any[];
}

export interface Date {
    begin: string;
    end: string;
    title?: any;
    isCanceled: boolean;
    rooms: Room[];
    lecturer: Lecturer[];
    actions: any[];
}

export class CourseObject {
    id: string;
    description?: any;
    isCoterie: boolean;
    hasHomeBias: boolean;
    correlations: Correlation[];
    dates: Date[];
    name: string;
    shortName: string;
    actions: any[];

    fav: boolean;
}