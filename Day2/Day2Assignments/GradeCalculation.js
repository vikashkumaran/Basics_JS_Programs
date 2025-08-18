let mark =90
let grade = calculateGrade(mark)
console.log(grade)
function calculateGrade(mark){
switch (true){
    case (mark>=90&&mark<=100):
        return "Grade A"
        break;
    case (mark>=80&&mark<=89):
        return "Grade B"
        break;
    case (mark>=60&&mark<=79):
        return "Grade C"
        break;
    case (mark>=50&&mark<=59):
        return "Grade D"
        break;
    case (mark>=40&&mark<=49):
        return "Grade E"
        break;
    default:
        return "No Grade"
}
}