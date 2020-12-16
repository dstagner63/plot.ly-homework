
# Project Name
> Plotly Homework - Bell Button Diversity

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This assignment incorporates the plotly JS library to create charts on a dashboard. The purpose is to learn how to create interactve charts on a dashboard style web page? Motivation?

## Screenshots
![Example screenshot](./Images/dashboard_part1.png)

## Technologies
* JavaScript
* Plotly Library
* HTML

## Setup
You can open the index.html file by right clicking and selecting "open in live server". I am using the Boot Camp Spot environment. Here is a link to the public Github repository https://github.com/dstagner63/plot.ly-homework 

## Code Examples
Reading in data:
`d3.json("samples.json").then(function(data)`
Coloring gauge chart steps:
`{range: [0, 1], color: "rgb(208, 220, 210)"},`
`{range: [1, 2], color: "rgb(196, 212, 199)"},`
`{range: [2, 3], color: "rgb(184, 204, 188)"},`
`{range: [3, 4], color: "rgb(172, 195, 177)"},`
`{range: [4, 5], color: "rgb(160, 186, 166)"},`
`{range: [5, 6], color: "rgb(149, 178, 155)"},`
`{range: [6, 7], color: "rgb(137, 169, 143)"},`
`{range: [7, 8], color: "rgb(125, 161, 131)"},`
`{range: [8, 9], color: "rgb(113, 152, 120)"},`
`{range: [9, 10], color: "rgb(103, 142, 110)"},`

## Features
List of features ready and TODOs for future development
* Interactive dashboard with some pretty gross data on subject's belly button bacteria
* Bar chart with values = sample_values
* Bubble chart with x = otu_ids and y = sample_values
* Gauge chart that plots the weekly belly button washing frequency of the selected subject.

To-do list:
* I have no improvement ideas
* Utilize this assignment as a dashboard template for other data.

## Status
Project is: Completed

## Inspiration
To learn how to use the Plotly JS library and complete the homework as described.


