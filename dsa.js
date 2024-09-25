// // 1.VOTING AGE PROBLEMS

function isEligible(age){
    if (age>=18)
    return true;

    else
    return false;
}
console.log(isEligible(30))

// //2. INCRESING OR DECREASING ORDER PROBLEMS

function IsIncresingOrDecreasingOrder(a,b,c){
    if(b>a && c>a){
    return "INCREASING"
    }
    else if(a>b && b>c){
        return "DECREASING"
    }else{
        return "NEITHER INCREASING NOR DECREASING"
    }
}

console.log(IsIncresingOrDecreasingOrder(2,5,6))
console.log(IsIncresingOrDecreasingOrder(34,5,67))
console.log(IsIncresingOrDecreasingOrder(4,55,76))
console.log(IsIncresingOrDecreasingOrder(233,54,6))
console.log(IsIncresingOrDecreasingOrder(2,58,6))
console.log(IsIncresingOrDecreasingOrder(245,55,6))


///3. LARGEST AMONG THREE NUMBERS
function LargestOfThree(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

console.log(LargestOfThree(2,4,5))
console.log(LargestOfThree(233,45,5))
console.log(LargestOfThree(2,445,5))
console.log(LargestOfThree(-2,-4,-5))
console.log(LargestOfThree(-2,-4,0))
console.log(LargestOfThree(2,2,5))

// //4. GRADING SYSTEM

function CalculateGrade(marks){
    if(marks>=90){
        return "Grade A"
    }else if(marks>=80 && marks<90){
        return "Grade B"
    }else if(marks>=70 && marks<80){
        return "Grade C"
    }else if(marks>=60 && marks<70){
        return "Grade D"
    }else if (marks>=33 && marks<60){
        return "Grade E "
    }else {
        return "FAIL"
    }
}
console.log(CalculateGrade(98))
console.log(CalculateGrade(88))
console.log(CalculateGrade(75))
console.log(CalculateGrade(67))
console.log(CalculateGrade(56))
console.log(CalculateGrade(32))

// // 5.MINIMUM LECTURES TO ATTEND IS 75%

function MinimumClassToAttend(m,n){
    totalclasstoattend= Math.ceil(0.75*m)
    if (n>=totalclasstoattend){
        return 0;
    }else{
        return totalclasstoattend-n;
    }
}
console.log(MinimumClassToAttend(89,78))
console.log(MinimumClassToAttend(98,78))
console.log(MinimumClassToAttend(9,2))
console.log(MinimumClassToAttend(59,52))
console.log(MinimumClassToAttend(782,78))
console.log(MinimumClassToAttend(52,2))


// 6. FINDING ROOTS IN QUADRATIC EQUATION

function findingRoots(a,b,c){
    const value = b*b-4*a*c;

    if (value===0){
        return -(b/2*a)
    }else if (value>0){
        const num1= -b-Math.sqrt(value)
        const num2= -b+Math.sqrt(value)


        const root1= num1/2*a;
        const root2= num2/2*a;


        var arr = []

        arr.push(root1);
        arr.push(root2);

        return arr;
    }else{
        return "No Roots Exists"
    }
}

console.log(findingRoots(5,4,9))
console.log(findingRoots(14,5,1))
console.log(findingRoots(1,56,1))
console.log(findingRoots(1,-5,1))
console.log(findingRoots(1,-5,-1))
console.log(findingRoots(1,9,1))
console.log(findingRoots(91,65,801))



// 7. FINDING TWO NUMBERS WHOSE SQUARE SUM IS EQUAL TO THE NUMBER

function findingTwoNumbers(num){
    var ans= [];
    var a,b;

    for (let i=0;i<=num;i++){
    for (let j=1;j<=num;j++){


        if(i*i + j*j ===num){
        a=i;
        b=j;
        ans.push(a);
        ans.push(b);
        }
    }
  }

return ans;
}

console.log(findingTwoNumbers(5))
console.log(findingTwoNumbers(55))
console.log(findingTwoNumbers(53))
console.log(findingTwoNumbers(56))
console.log(findingTwoNumbers(9589))


// // 8. PROGRAM TO FIND SUM OF ELEMENTS IN A GIVEN ARRAY.

function sumOfArray(arr){
    let n = arr.length;
    let sum=0;


    for (let i=0;i<n;i++){
        sum = sum + arr[i];
    }

 return sum;
}
const arr=[1,6,8,4,2,1];
const ans= sumOfArray(arr);

console.log(ans);




// 09. PROGRAM TO FIND LARGEST ELEMENT IN AN ARRAY.
function MaxNumber(arr){

    let n=arr.length;
    let largest = arr[0];

    for (let i=1;i<n;i++){
        if (arr[i]>largest){
            largest = arr[i];
        }
    }

    return largest;
}


console.log(MaxNumber([1,5,6,3,77,7,58]));




// 10. CYCLICALLY ROTATE AN ARRAY BY ONE.

function rotate([arr]){

    let n = arr.length;
    let temp = arr(n-1);
    for(let i=n;i>0;i--){
        arr[i]=arr[i-1];
    }

    arr[0] = temp;
    return arr;
}


console.log(rotate([1,5,6,4,3,2]));


// // 11. YOU ARE GIVEN A STRING S YOU NEED TO REVERSE THE STRING.

function reverseAString(s){
    s=s.split('');

    let n=s.length;
    for (let i=0;i<n/2;i++){
        let temp = s[i]
        s[n-1-i] = temp;
    }
    return s.join('');
}

console.log(reverseAString("utkarsh"));


// 12. WRITE A FUNCTION TO ROTATE (arr[],d,n) that rotates arr[] of size n by d elements.
// Input arr[] = [1,2,3,4,5,6,7], d=2, n=7


console.log(rotateByTwoPlaces([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function rotateByTwoPlaces([arr]){
    let n = arr.length
    let temp = [];
    for (let i=0;i<2;i++){
        temp.push(arr[i]);

    }
    console.log(arr);

    console.log(temp);

    for (let i=0;i<n-2;i++){
        arr[i]=arr[i++]
    }
    console.log(arr);
    for (let i=n-2;j=0;i<n,j++){
        arr[i]=temp[j];
    }
    return arr;
}

console.log(rotateByTwoPlaces([1,2,3,4,5,6,7,8,9]));




// 13. CREATE A PROGRAM WHICH GIVES OUTPUT FOR CHILDREN TO GO OUT IN PARK IF THE TEMPERATURE IS B/W 20 DEGREE CELSIUS -25
// DEGREE CELSIUS  AND IF IT'S NOT RAINING OUTSIDE , ASK THEM TO BE IN PLAY SCHOOL IF THE TEMP. IS B/W 18 DEGREE CELSIUS
// AND 20 DEGREE CELSIUS AND RAINING OTHERWISE THEY SHOULD NOT STEP OUT OF THE HOME.

function ToPlayOutside(temp,raining){

if (temp>=20 && temp<=25 && raining == False ){

return "Go out in park"
}else {
    if (temp>=18 && temp<20 && raining == true ){
    return "Be in Play School"
}else{
    return "Not Out Of The Home"
}
}
}
console.log (ToPlayOutside(17,true));
console.log (ToPlayOutside(11,false));
console.log (ToPlayOutside(17,false));
console.log (ToPlayOutside(7,false));
console.log (ToPlayOutside(2,true));
console.log (ToPlayOutside(51,true));



// 14. CREATE A PROGRAM TO PRINT THE RESULT AS PASS IF THE MARKS GREATER THAN OR EQUAL TO 40 USING TERNARY OPERATOR

// var num = 39;
// var ans = (num>= 40)?"PASS" : "FAIL";
// console.log(ans);

// 15. CREATE A PROGRAM TO FIND IF THE NUMBER IS NEGATIVE , POSITIVE OR ZERO {BY SWITCH STATEMENT}

let x = 7;

switch (true){
    case x>0:
    console.log("POSITIVE");
    break;
    case x<0:
    console.log("NEGATIVE")
    break;
    case x=0:
    console.log("ZERO")
    break;
    default:
    console.log("INVALID")
}

// 16. WRITE A PROGRAM TO FIND THE HCF OR GCD(GREATEST COMMON DIVISOR) OF TWO INTEGERS.

function hcf(a,b){
    for (let i=Math.min(a,b); i>=0; i--){
        if (a%i===0 && b%i===0){
            return i;

        }
    }
    return 1;
}
console.log(hcf(12,21));
console.log(hcf(0,5));

// 17. CREATE A PROGRAM TO REVERSE A STRING



// 18. CREATE A PROGRAM TO FIND THE MAXIMUM AMONG THE THREE NUMBERS

function largestOfThree(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }else{
            return c;
        }
    }else{
        if(b>c){
            return b;
        }else{
            return c;
        }
    }
}

console.log(largestOfThree(2, 9, 5));  
console.log(largestOfThree(70, 9, 5)); 
console.log(largestOfThree(2, 9, 50));


// 19. CREATE A PROGRAM TO FIND THE SUM OF ALL DIGITS OF A NUMBER


function SumOfANumber(n){
    let sum =0;
    while (n>0){
        let d = n%10;
        sum = sum+d;
        n= Math.floor(n/10);
    }
    return sum;
}
console.log(SumOfANumber(1325));

// 20. FIND IF A GIVEN NUMBER IS AN ARMSTRONG NUMBER OR NOT
//  ARMSTRONG(N0. THAT IS EQUAL TO THE SUM OF CUBE OF IT'S DIGITS)

function IsArmstrong(n){
    let sum=0;
    let temp=n;

    while (n!=0){
        let d=n%10;
        sum = sum+ (d*d*d);
    }
    return temp===sum;
}

console.log(IsArmstrong(1233));


// 21. CREATE A PATTERN USING * AS SHOWN BELOW USING LOOPS
// *
// **
// ***
// ****
// *****
// ******

function PrintPattern(n){
    for (let i=0;i<n;i++){

        let row = "";

        for(let j=0;j<i++;j++){
            row=row+"*";
        }
    }
    console.log(row)
}

console.log(PrintPattern(10));

//22. calculating the perimeter

class shape{
    constructor(name,sides,sidelength){
        this.name=name
        this.sides=sides
        this.sidelength=sidelength
    }

    calcperimeter(){

       console.log (this.sides*this.sidelength)
    }
    

}
const square= new shape("square",20,5)
square.calcperimeter();

//23. Reversing the string

function reverseAString(s){
    s=s.split('');

    let n=s.length;
    for (let i=0;i<n/2;i++){
        let temp = s[i]
        s[n-1-i] = temp;
    }
    return s.join('');
}

console.log(reverseAString("shivam"));
console.log(reverseAString("naman"));
console.log(reverseAString("naitik"));
console.log(reverseAString("mygym"));
console.log(reverseAString("utkarsh"));
console.log(reverseAString("ritik"));

















































