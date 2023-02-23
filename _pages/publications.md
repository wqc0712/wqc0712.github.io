---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

## Conference papers

{% for post in site.publications reversed %}
  {% if post.pubtype == 'conference' %}
    {% include archive-single.html %}
   {% endif %}
{% endfor %}

------

## Demo papers
{% for post in site.publications reversed %}
  {% if post.pubtype == 'demo' %}
    {% include archive-single.html %}
   {% endif %}
{% endfor %}

## Patent

Data processing method and device, program product and storage medium, CN113448969B
