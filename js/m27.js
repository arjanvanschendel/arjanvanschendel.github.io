let outputDiv = document.getElementById("outputDiv");
let outputDivContainer = document.getElementById("outputDivContainer");
let passwordForm = document.getElementById("passwordForm");
let errorText = document.getElementById("errorText");

function resetPage(){
    outputDiv.innerHTML = "";
    document.getElementById("password").value = ""
    outputDivContainer.hidden = true;
    passwordForm.hidden = false;
    stopConfetti();
}

function handlePasswordCheck(){
    let input = document.getElementById("password").value;
    let result = passwords.find(x => matchPasswordsArray(x.password, input))
    if(result){
        console.log(result.result)
        let resultContents = result.result;
        outputDiv.innerHTML = resultContents;
        outputDivContainer.hidden = false
        passwordForm.hidden = true;
        startConfetti();
    }
    else{
        errorText.hidden = false;
        stopConfetti();
        setTimeout(function() {
            errorText.hidden = true;
        }, 5000);
    }
}

function matchPasswordsArray(array, b){
    let result = false;
    array.forEach(element => {
        if(matchPasswords(element, b)){
            result = true;
        }
    });
    return result;
}

function matchPasswords(a, b){
    aClean = cleanString(a);
    bClean = cleanString(b);
    
    return aClean === bClean;
}

function cleanString(input){
    return input
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
        .replace(/[áàâä]/g, 'a')
        .replace(/[úùûü]/g, 'u')
        .replace(/\s+/g, '')
}

const passwords = [
    {
        password: ["ERVE ASITO"],
        result: "Zoek op de meest logische plek om dingen op te bergen die je supersporadisch nodig hebt, zoals een rolmaat."
    },
    {
        password: ["AWAY"],
        result: "Star Wars kijken was altijd al leuk, maar sinds een recente aankoop een stuk indrukwekkender. Zoek bij de elektronica die hier een grote rol in heeft gespeeld."
    },
    {
        password: ["GROGU"],
        result: "Na de verhuizing bleken er veel te veel borden te zijn voor twee personen. Om de mooiste borden heel te houden, zijn die goed opgeborgen."
    },
    {
        password: ["VALLE GRAN REY"],
        result: "Een kat komt altijd op zijn pootjes terecht. Dit meubel ook, ooit, maar het is nog niet zo ver…"
    },
    {
        password: ["BISON BOWLINGBAAN HAARLEM"],
        result: "Hier wordt licht omgezet in Netflix, plastic bewaard in plastic, en klik je de kracht uit een deel van het huis."
    },
    {
        password: ["BAS DOST", "DOST"],
        result: "Dit cadeau zit verstopt achter een zwemmend skelet."
    },
    {
        password: ["PIERRE AIGUE", "P AIGUE"],
        result: "Het zit helemaal onder de bamboe!"
    },
]

// CONFETTI
var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "top:0;left:0;right:0;bottom:0;z-index:2;position:fixed;user-select:none;display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();