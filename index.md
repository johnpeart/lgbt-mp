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
			{% if member[site.election-period] == "Elected" %}
				{% assign total-members = total-members | plus: 1 %}
				{% assign count-members = count-members | plus: 1 %}
			{% endif %}
		{% endif %}

	{% endfor %}

	{% if count-members > 0 %}
		{% assign count-parties-non-zero = count-parties-non-zero | plus: 1 %}
	{% endif %}

{% endfor %}

> **Currently, there are {{ total-members }} MPs who define as LGBT in Parliament.**
>
> **{{ count-parties-non-zero }} parties or groups had at least 1 out LGBT MP.**
>					
> *This data was last updated 3 April 2019.*					

# About this site

This website was created to publicly record how many out LGBT MPs were sitting in the House of Commons. 

The data collected shows Members of Parliament who are 'out' as lesbian, gay, bisexual, trans or with another minority sexual orientation or gender identity, and for which I can find a reliable source.

**Select an MP's name to see their constituency and where the source of this information came from.**

# Structured data

This dataset is available as a [CSV file on Github](https://github.com/johnpeart/lgbt-mp/tree/master/_data).

The file contains historical data, starting with the 2015 to 2017 Parliament.

# Sources

This information has been collated from internet searches and publicly available information. An MP is listed either when an MP has made a public statement about their sexual orientation or gender identity, or there is a reliable independent source. 

The main sources so far have been [Pink News](//pinknews.co.uk), the [The Independent](//independent.co.uk). More recently, I have also cross-referenced with data from [The LGBTQ Representation and Rights Research Initiative](//lgbtqrepresentationandrights.org/)

