var a = '';
var b = '';
var num = [];
var ans;

function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();
    }

	a ='';	
	b ='';
    document.getElementById('screen').innerHTML = 0;
}


function sendNum(number){
    num.push(number);

    if(num.length !=1){
        a = '';
        document.getElementById('screen').innerHTML = a;
    }

    for(i=0; i<num.length; i++){
        a = a + num [i];
    }
    document.getElementById('screen').innerHTML = a;    
}

function equalTo(){
	document.getElementById('screen').innerHTML = '';

	for(i=0; i<num.length ; i++){

		b += num[i];
	}

	ans = eval(b);	

	document.getElementById('screen').innerHTML = ans;

	while(num.length > 0){
    	num.pop();
	}
    return 0;
}


/*num.push(ans.toString());   bug   */