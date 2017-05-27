---
---

{% assign count-parties = 0 %}

{% for party in site.data.parties %}

	{% assign count-parties = count-parties | plus: 1 %}

  	{% assign count-members = 0 %}

	{% for member in site.data.members %}

		{% if party.party == member.party %}
			{% assign count-members = count-members | plus: 1 %}
		{% endif %}

	{% endfor %}

	{% if count-members > 0 %}
		{% assign count-parties-non-zero = count-parties-non-zero | plus: 1 %}
	{% endif %}

{% endfor %}

window.onload = function() {

    // document.getElementById("btn-share").addEventListener( 'click', share);

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

function share() {
	alert('Share sheet');
}