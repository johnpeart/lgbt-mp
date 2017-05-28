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
			{% assign total-members = total-members | plus: 1 %}
			{% assign count-members = count-members | plus: 1 %}
		{% endif %}

	{% endfor %}

	{% if count-members > 0 %}
		{% assign count-parties-non-zero = count-parties-non-zero | plus: 1 %}
	{% endif %}

{% endfor %}

# LGBT MP

**This website was created to record how many out LGBT MPs were sitting in the House of Commons.**

The data in this dataset are for the Parliament which sat from May 2015 to May 2017. The dataset is correct, to the best of my knowledge, up to 27 May 2017.

There were {{ total-members }} MPs who said they define as LGBT when Parliament dissolved in May 2017.

{{ count-parties }} parties returned MPs in this Parliament, and {{ count-parties-non-zero }} of them had at least 1 out LGBT MP.

**This dataset will be updated as soon as possible after the June 2017 General Election.** 

This dataset is available as a CSV file on Github.

