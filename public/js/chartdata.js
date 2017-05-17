

var w = 500,
h = 500;

var colorscale = d3.scale.category10();

//Data
var d = [
    [
    {axis:"HTML/CSS",value:5},
    {axis:"Javascript",value:3.5},
    {axis:"NodeJS/Express",value:3},
    {axis:"Ember",value:3},
    {axis:"Angular",value:3},
    {axis:"Python",value:3.5},
    {axis:"Firebase",value:4},
    {axis:"PostgreSQL",value:4},
    {axis:"Ruby on Rails",value:4},
    ]
  ];

//Options for the Radar chart, other than default
var mycfg = {
w: w*.55,
h: h*.55,
radius: 4,
maxValue: 5,
levels: 10,
ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);
