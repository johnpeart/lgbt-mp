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
			{% if member.[site.election-period] == "Y" %}
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

**This data is currently being updated with the outcome of the June 2017 General Election.**

There are {{ total-members }} MPs define as LGBT in the Parliament that will form in June 2017. {{ count-parties-non-zero }} parties had at least 1 out LGBT MP.

This dataset is available as a CSV file on Github.

