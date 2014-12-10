$(document).ready(init);

//var firstname =$("firstanme").val();
//var lastname = $("lastname").val();

//$("addname").click(addstudent);


    
    var students =[
        //{fname: "Joe", lmane: "Scmoe", grade: 55} //ultimately what this would look like
    ];
    
    var fname_field, lname_field, grade_field, add_btn; 
    
    function init(){
        fname_field= $('#firstname');
        lname_field = $('#lastname');
        grade_field = $('#grade');//variables to point to those input fields 
        add_btn = $('btn-addname');
        
        add_btn.click(addStudent);
    }
    
    function addStudent() {
        var student = {
            firstanme: fname_field.val(),
            lastname: lname_field.val(),
            grade: parseFloat(grade_field.val())
        }
        
        students.push(student);
        
        fname_field.val('');
        lname_field.val('');
        grade_field.val('');
        
        console.log(students);
    }


