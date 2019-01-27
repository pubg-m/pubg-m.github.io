$(document).ready(function() {
var tips = [
"VSS Vintorez can be used in Single fire mode and Full Auto mode.",
"Throwing a grenade has a trajectory to its path and you need to calculate the path while throwing for maximum accuracy, This calculation will come with practise.",
"QBZ95 weapon is highly effective for short range combat and has good rate of fire.",
"M24 has an amazing power rating, Other weapons which have higher power rating are the AWM and some shotguns.",
"Smoke grenade can be deployed for temporary cover and you can try to heal your teammate in that time, The enemy line of sight will be broken and you can use that time to help.",
"Vector has very high fire rate making is suitable for clearing rooms in buildings.",
"OTs-14 Groza has high reload time which is a big drawback for a otherwise amazing weapon.",
"The Energy drink will increase boost, which as time goes by will recover your health bit by bit.",
"Vector firest .45 rounds with single shot, burst and full auto. Fast, stable and mobile, but not too convenient unless equipped with an extended magazine.",
"Beryl M762 is a highly versatile weapon useful at short, medium and long range.",
"The Level 2 Backpack is most preferred because of its low profile and high storage capabilities, Due to its low profile, Even when you are prone it is not easily visible.",
"Kar98K does fatal damage for level 2 heltmets and can two headshot kill anyone even when they are wearing a non damaged level 3 Spetznaz hetmet.",
"MK47 Mutant only has Single fire and 2 bullet Burst mode.",
"The 5.56mm ammo can also be found in Air Drops with AUG A3 Assault Rifle and M249 Light Machine Gun.",
"Kar98K cannot one shot kill players when shot at their body but has capabilities of severely wounding them.",
"M24 deals max damage upto 120m and beyond that the damage drops off consistently upto 600m.",
"M249 has a great stopping potential and can be used for suppressive fire.",
"When you face a group of player, You can throw a grenade at them and can possible split them in multiple directions.",
"Half Grip most useful for spraying rounds quickly using assault rifles and submachine guns.",
"Mini14 is well suited for long range sharpshotting where continous shots are intergral to winning the gunfight."
];

$(".btn").on("click", function() {
	$(".g-tip").text(tips[Math.floor(Math.random()*tips.length)]);
})


function myFunction(x) {
	if (x.matches) {
		$(".tips p").css("font-size", "20px");
		$(".tips").css("max-width", "90%");
	} else {
		$(".tips p").css("font-size", "25px");
		$(".tips").css("max-width", "70%");
}
}
var x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)


});