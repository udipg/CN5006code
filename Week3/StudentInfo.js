const DOB="29/10/2000"

const getStudentName = () =>
{
    return "udip"
}
const getCampusName = () =>
{ 
    return ("UEL Campus")
}
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob= DOB
exports.Studentgrade=(marks)=>
        {
            if(marks>50 && marks<70)return ("B garade")
                else
            return ("A grade")
        }
