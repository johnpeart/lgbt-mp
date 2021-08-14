---
layout: page
title: Licenses and attribution
---

<!-- ASSIGN WHOLE DATASET -->
{% assign mps = site.data.members %}

## References

{% for mp in mps %}

{% assign memberID = mp.id %}
{% assign memberName = mp.name %}
{% assign memberSource = mp.source-description %}
{% assign memberSourceURL = mp.source-url %}
{% assign memberParliamentURL = mp.parliament-website %}

{% if uniqueMemberName != mp.name %}

### {{ memberName }}
<p><strong>LGBT+ reference source:</strong> <a href="{{ memberSourceURL }}" title="Visit the reference source page for {{ memberName }}">{{ memberSource }}</a></p>
<p><strong>UK Parliament website page:</strong> <a href="{{ memberParliamentURL }}" title="Visit {{ memberName }}'s page on the UK Parliament website">{{ memberName }}</a></p>

{% endif %}

{% assign uniqueMemberName = memberName %}

{% endfor %}

## Images

{% for mp in mps %}

{% assign memberID = mp.id %}
{% assign memberName = mp.name %}
{% assign memberImageSource = mp.image-source %}
{% assign memberImageSourceURL = mp.image-source-url %}
{% assign memberImageLicense = mp.image-license %}
{% assign memberImageLicenseURL = mp.image-license-url %}

{% if uniqueMemberName != mp.name %}

<h3><strong>{{ memberName }}</strong><br></h3>
<p><strong>Image source:</strong> <a href="{{ memberImageSourceURL }}" title="Visit the image source page for {{ memberName }}">{{ memberImageSource }}</a></p>
<p><strong>Image license:</strong> <a href="{{ memberImageLicenseURL }}" title="Read the license for {{ memberName }}'s image">{{ memberImageLicense }}</a></p>

{% endif %}

{% assign uniqueMemberName = memberName %}

{% endfor %}