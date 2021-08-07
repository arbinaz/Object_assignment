var student={
    name:'Steve',
    age:25,
    mobile:7349550953,
    adress:{
        city:'Bangalore',
        State:'KA',
        pin:560063
    },
    hobbies:['singing','Reading','MakeOver','Cooking'],
    gethobbies:function(){
        for(i=0;i<=student.hobbies.length-1;i++){
            console.log(student.hobbies[i]);
        }
    }

}
console.log(student.gethobbies())