---
layout: page
title: Projetos
subtitle: Desenvolvendo meus delírios
permalink: /projects
description: Projetos em desenvolvimento, finalizado, o que pretendo iniciar, também portifólio.
category: projects
schema: https://schema.org/CollectionPage
---

{%- if site.projects.size > 0 -%}
    {%- include cards_list.html pages=site.projects-%}
{%- else -%}
    #### Nenhum projeto publicado ainda
{%- endif -%}