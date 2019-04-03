---
layout: app
---

{% assign count-parties = 0 %}
{% assign total-members = 0 %}

{% for party in site.data.parties %}

	{% assign count-parties = count-parties | plus: 1 %}

  	{% assign count-members = 0 %}

	{% for member in site.data.members %}

		{% if party.party == member.party %}
			{% if member.[site.election-period] == "Elected" %}
				{% assign total-members = total-members | plus: 1 %}
				{% assign count-members = count-members | plus: 1 %}
			{% endif %}
		{% endif %}

	{% endfor %}

	{% if count-members > 0 %}
		{% assign count-parties-non-zero = count-parties-non-zero | plus: 1 %}
	{% endif %}

{% endfor %}

# LGBT MP

**This website was created to record how many out LGBT MPs were sitting in the House of Commons.**

*This data is correct, to the best of my knowledge, as of 3 April 2019.*

There are {{ total-members }} MPs who define as LGBT in the 2017 to 2022 Parliament. {{ count-parties-non-zero }} parties or groups had at least 1 out LGBT MP.

**Hover or tap on an MP's name to see where the source of this information comes from.** 

This information has been collated from internet searches and publicly available information. 

An MP is listed either when an MP has made a public statement about their sexual orientation or gender identity, or there is a reliable independent source such as the [LGBTQ Representation and Rights Research Initiative](http://lgbtqrepresentationandrights.org/). 

This dataset is available as a CSV file on Github.

