const express = require("express")
const fs = require("fs")

const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', function(request, response){
    response.send('Welcome to Express. This is my First Server');
});


app.listen(8000, function(){
    console.log("Server is runnning on port 8000");

});

/*Second Exercise*/
app.get('/about', function(request, response){
    response.send('This is basic application');
});

app.get('/users/:userId/books/:bookId',function(request,response){
    response.send(request.params)
});

app.get('/GetStudents',function(request,response)
{
    studentdata={}
    fs.readFile(__dirname + "/student.json", "utf-8",function(err,data){
        response.json({
            'status':true,
            'status_code':200,
            'data': JSON.parse(data)

        })
        
    })
})
app.get('/GetStudents/:id',function(request,response)
{
    fs.readFile(__dirname + "/student.json", "utf-8",function(err,data)
    {
        const students =JSON.parse(data);
        const students_data =students["Student"+request.params.id]

        if(students_data)
            {
            response.json(students_data)

            } else
         {
            response.json(
                {
                "status": false,
                "errorMessage":"Record not found"
                 })
         }
    })
})

app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
var name = req.body.firstName + ' ' + req.body.lastName+' ';
var Age= req.body.myAge+ ' Gender: ' + req.body.gender+''
Qual= ' Qualification'+ req.body.Qual
console.log(req.body.Qual)
res.send({
status: true,
message: 'form Details', data: {
name: name, age:Age, Qualification:Qual,
}
});
});





