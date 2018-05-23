export class Curricula {

    id: string;
    name: string;
    shortname: string;
}


export class Faculty {

    id: string;
    name: string;
    shortname: string;
    curricula: {
        [key: string] : Curricula
    };

    fav: boolean;
}


export interface Course {

    CourseId: string;
    CourseName: string;
    CourseLecturer: string;
    CourseFaculty: number;
    CourseStatus: string;
    CourseDescription: string;
  
}
