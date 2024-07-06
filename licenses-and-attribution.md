---
layout: page
title: Licenses and attribution
---

<!-- ASSIGN WHOLE DATASET -->
{% assign mps = site.data.members %}

## References

### Images 

<p>All images provided via the Parliament Members API v1 OAS3 under the <a href="https://www.parliament.uk/site-information/copyright-parliament/open-parliament-licence/">Open Parliament Licence</a>.</p>

### Members
{% for mp in mps %}

{% assign memberID = mp.members-id %}
{% assign memberName = mp.first-name | append: " " | append: mp.last-name %}
{% assign memberSource = mp.source-description %}
{% assign memberSourceURL = mp.source-url %}
{% assign memberParliamentURL = mp.parliament-website %}

{% if uniqueMemberName != memberName %}

#### {{ memberName }}
<p><strong>LGBT+ reference source:</strong> <a href="{{ memberSourceURL }}" title="Visit the reference source page for {{ memberName }}">{{ memberSource }}</a></p>
<p><strong>UK Parliament website page:</strong> <a href="{{ memberParliamentURL }}" title="Visit {{ memberName }}'s page on the UK Parliament website">{{ memberName }}</a></p>


{% endif %}

{% assign uniqueMemberName = memberName %}

{% endfor %}