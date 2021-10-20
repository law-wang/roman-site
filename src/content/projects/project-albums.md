---
title: 10 Albums of the 2010s
updated: 2020-09-05 00:00
published: true
category: Project
tag: ["Featured Project"]
permalink: "/project/albums"
type: project
casestudy: false
tagline: "Art, Design, Web Development"
timeframe: "Nov. 2019 - Jun. 2020"
tools: "Figma, React, Photoshop, Printing Press, Last.fm API"
coverimage: ../../images/projectimages/albumheadercolor.png
description: "Designed a jewel-box-bound book that was printed on a 19th century printing press to highlight the music that helped define the past decade, which was then turned digital with React."
link: https://10of10s.netlify.app/
---

As the final project for the course “Art of the Printed Word,” we were tasked with printing and binding our own book. Seeing that it was near the end of a decade, I wanted to document the music that I found impactful and defined the past 10 years. Using the Jonathan Edwards printing press and Yale Printing & Publishing Services, I produced 10 disc-shaped leaflets bound in a jewel case, each telling the story of one album.

### Problem 
    
But, afterall, it was printed in an edition of five, with one sent to the Special Collections at Yale. How would I bring permanence and lasting impact to the project?

### Solution
    
Build a React app to showcase the 10 albums and let the book live on the internet, forever.

![10 Header](/projectimages/albumheadercolor.png)

### Original Design

The front and back covers with tracklist, as well as the side piece are meant to give the illusion of an actual album packaging. Inside the jewel case, the circular printed cards extend the contrast between paper and compact discs as different means of distributing media, drawing from the technological advancements of recent decades as well as comparing the relative transience of printed ephemera versus the durability of plastic CDs.

![10 Slider](/projectimages/albumdesign.jpg)
![10 Slider](/projectimages/albumdesignslider.png)

### Web Design

The web implementation takes into consideration adding additional information to the physical version, while maintaining consistency of aesthetics. As such, the serif type is kept constant with Garamond and Moret. Overall, each full-height page is meant to feel like one page in a book, whereas clicking on either the left or right side of the page simulates the flipping of book pages.

![10 Figma1](/projectimages/albumweb1.png)
![10 Figma2](/projectimages/albumweb2.png)

### Process

* _To reduce the project’s bulk_, built components with React hooks that make calls to the Last.fm API to retrieve album information, such as artist, year, title, and cover art of album.
* _To create background gradient_, used React Palette to extract the dominant colors from the album art. 
* _To build a responsive experience_, set font size with vw, cursor highlight with CSS hover rule, and header and footer as fixed on mobile devices.

![10 Result1](/projectimages/albumfigma1.jpg)
![10 Result2](/projectimages/albumfigma2.jpg)

### Results

* _Evolution of media:_ from paper to compact disc to the world wide web, each step in the project represents a stage in technological progress and the means of information consumption. The ephemeral and fragile gave way to the permanent which then gave way to the omnipresent, shareable, unforgiving.
* _Experiment with React and API:_ learned React by doing, used components to simplify and condense code, made API calls to unlock more possibilities.
