function calculate(){

    let n = Number(document.getElementById("subjects").value);

    let total = 0;

    for(let i=1;i<=n;i++){
        let marks = Number(prompt("Enter marks of Subject "+i));
        total += marks;
    }

    let avg = total/n;

    let grade;

    if(avg>=90)
        grade="A";
    else if(avg>=75)
        grade="B";
    else if(avg>=60)
        grade="C";
    else
        grade="D";

    document.getElementById("result").innerHTML=
    `Total = ${total}<br>
     Average = ${avg}<br>
     Grade = ${grade}`;
}