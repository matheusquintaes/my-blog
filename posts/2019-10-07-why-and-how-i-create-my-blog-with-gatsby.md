---
title: Why and how I create my blog with Gatsby
description: >-
  I felt I needed to study new technologies and, for me one of the bests ways to
  learn something is by practicing it.
date: '2019-10-07 08:07:25'
thumbnail: /assets/img/why-and-how-i-create-my-blog-with-gatsby.jpg
category: DEV
---
When you create your project, you learn a lot in the process.

You learn how to use the tools, how to publish, use custom domain types, like DNS.

And for me, creating posts in English, which is not my native language, would be a great way to practice my writing skills.

After a lot of research, aiming to find the best stack for my blog, I came across [Gatsby](https://www.gatsbyjs.org/).

![Gatsby ](/assets/img/why-and-how-i-create-my-blog-with-gatsby.jpg "Gatsby ")

Gatsby is a [React](https://reactjs.org/docs/getting-started.html)-based, [GraphQL ](https://graphql.org/learn/)powered [static site generator.](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)

What does that even mean?

Gatsby is a powerful framework. One of the advantages is generating static files in the building process while using React in development time. 

Once Gatsby generates static files and has a good system of cache, the SEO and performance say thank you.

![Performance](/assets/img/capture.png "Performance")

Although Gatsby is younger than [Jekyll ](https://jekyllrb.com/)or [Hugo](https://gohugo.io/), the docs and the community are incredible, every time I have an issue, I can quickly find a solution there.

Moreover, Gatsby has a [lot of plugins](https://www.gatsbyjs.org/plugins/) that help with application development.

e.g. the plugin that makes your website become a PWA with a single line!

## Gatsby Uses GraphQL

![GraphQL](/assets/img/1_rfckeckmtid0waaletckag.png "GraphQL")

In a nutshell, GraphQL is **a syntax that describes how to ask for data** and is generally used to load data from a server to a client.

The GraphQL was designed for Facebook to solve one of the biggest drawbacks of REST-like APIs.

The main characteristics of the GraphQL are:

* It lets the client specify exactly what data it needs.
* It makes it easier to aggregate data from multiple sources.
* It uses a type system to describe data.

A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON to the client.

![GraphiQL](/assets/img/graphl.png "GraphiQL")

This was one of the coolest discoveries I’ve made in this project, and soon I will make a detailed post about GraphQL.

## Styled Components

[Styled components](http://styled-components.com/) is a CSS-in-JS styling framework that uses tagged template literals in JavaScript and the awesome power of CSS to provide a platform that allows you to write actual CSS to style react components.

Netlify and Netlify CMS

Netlify It's the good static site host, you can make a fantastic website for free:

* They give you a custom URL for your project under netlify.com
* Free SSL with Let's Encrypt integration
* Faster ping and TFP 

and more deployment options:

* you can drag and drop a folder with all your HTML, CSS, JS, etc
* or you can even connect a project to a GitHub project and have it automatically deploy.

To write my posts and upload images I used [Netlify CMS](https://www.netlifycms.org/).

Netlify CMS can provide the Markup data for a Gatsby website, which allows me to enter content through an intuitive and easy to use interface. 

![Gatsby CMS](/assets/img/netlify-cms2.png "Gatsby CMS")
