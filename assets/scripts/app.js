---
---

{% assign count-parties = 0 %}

{% for party in site.data.parties %}

	{% assign count-parties = count-parties | plus: 1 %}

  	{% assign count-members = 0 %}

	{% for member in site.data.members %}

		{% if party.party == member.party %}
			{% if member.[site.election-period] == "Y" %}
				{% assign count-members = count-members | plus: 1 %}
			{% endif %}
		{% endif %}

	{% endfor %}

	{% if count-members > 0 %}
		{% assign count-parties-non-zero = count-parties-non-zero | plus: 1 %}
	{% endif %}

{% endfor %}

window.onload = function() {

    document.getElementById("btn-share").addEventListener( 'click', share);
    document.getElementById("btn-share-close").addEventListener( 'click', share);

    document.getElementById("btn-about").addEventListener( 'click', about);
    document.getElementById("btn-about-close").addEventListener( 'click', about);

    document.getElementById("app-cover").addEventListener( 'click', appInfo);

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	var parties = {{ count-parties }};
	var partiesNonZero = {{ count-parties-non-zero }};
	var pageWidth = 30;

	if ( w >= 768 ) {

		document.getElementById('app').style.width = ((partiesNonZero + 2) * pageWidth) + 'vw';

	}



}

window.onresize = function() {

	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	var parties = {{ count-parties }};
	var partiesNonZero = {{ count-parties-non-zero }};
	var pageWidth = 30;

	if ( w >= 768 ) {

		document.getElementById('app').style.width = ((partiesNonZero + 2) * pageWidth) + 'vw';

	}

}

function appInfo() {
    document.getElementById("cover").classList.toggle("hover");
}

function share() {

    var sheet = document.getElementById("share-sheet");

	if (sheet.classList.contains("open")) {

    	sheet.classList.remove("open");
    	sheet.classList.add("close");

    } else if (sheet.classList.contains("close")) {

    	sheet.classList.remove("close");
    	sheet.classList.add("open");

    } else {
    	sheet.classList.add("open");
    }

}

function about() {

    var sheet = document.getElementById("about-sheet");

	if (sheet.classList.contains("open")) {

    	sheet.classList.remove("open");
    	sheet.classList.add("close");

    } else if (sheet.classList.contains("close")) {

    	sheet.classList.remove("close");
    	sheet.classList.add("open");

    } else {
    	sheet.classList.add("open");
    }

}