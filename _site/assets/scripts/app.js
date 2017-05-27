



window.onload = function() {

    // document.getElementById("btn-share").addEventListener( 'click', share);

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	var parties = 11;
	var partiesNonZero = 3;
	var pageWidth = 30;

	if ( w >= 768 ) {

		document.getElementById('app').style.width = ((partiesNonZero + 2) * pageWidth) + 'vw';

	}

}

window.onresize = function() {

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	var parties = 11;
	var partiesNonZero = 3;
	var pageWidth = 30;

	if ( w >= 768 ) {

		document.getElementById('app').style.width = ((partiesNonZero + 2) * pageWidth) + 'vw';

	}

}

function share() {
	alert('Share sheet');
}