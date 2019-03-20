function check(){
	/*/var question1 = document.quiz.question1.value;/*/
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correct = 0;

		/*/if (question1 == "") {
			correct++;
}/*/
		if (question2 == "Les boules de graisse dans ses pattes") {
			correct++;
}
		if (question3 == "5 kilomètres de distance") {
			correct++;
}
		if (question4 == "Le mécanisme MEAD") {
			correct++;
}
		if (question5 == "340m/s") {
			correct++;
}
		if (question6 == "Oui") {
			correct++;
}
		if (question7 == "Des infrasons") {
			correct++;
}
		if (question8 == "Christian Herbst") {
			correct++;
}
		if (question9 == "Au chauffage du support par lequel il se propage") {
			correct++;
}


var messages = ["Excellent travail !", "Je sais que tu peux faire mieux", "Tu n'as pas bien suivi le TPE, tu peux recommencer après avoir bien relu et compris celui-ci"];
var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];

var range;
	if (correct < 4) {
		range=2;
}

	if (correct >= 4 && correct < 6) {
		range=1;
}

	if (correct >= 6) {
		range=0;
}

document.getElementById("after_submit").style.visibility = "visible";
	
document.getElementById("message").innerHTML= messages[range];
document.getElementById("number_correct").innerHTML="Tu as obtenu " + correct + " réponse(s) correcte(s).";
document.getElementById("picture").src = pictures[range];
}