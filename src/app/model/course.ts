export class Course {
    courseId: number;
    name: string;
    courseDescription: string;
    ratingValue: number;

    constructor() {
        this.courseId = 0;
        this.name = '';
        this.courseDescription = '';
        this.ratingValue = 0.00;
    }
}
