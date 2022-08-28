export class Course {
    courseId: string;
    name: string;
    courseDescription: string;
    ratingValue: number;

    constructor() {
        this.courseId = '';
        this.name = '';
        this.courseDescription = '';
        this.ratingValue = 0.00;
    }
}
