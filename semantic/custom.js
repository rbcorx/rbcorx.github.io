obj = {
    "clip":{
        "segments": [
                {
                    "from":1.03434,
                    "to":3.44545,
                    "sent": "++",
                    "speaker": "Salesman",
                    "tag": "product",
                    "summ": "salesman speech summary...",
                    "concepts": [
                        // named entities
                        {"value": "Sojern", "type": "Entity", "verbose": "Organization"},
                        {"value": "America", "type": "Entity", "verbose": "Location"},
                        // topics
                        {"value": "advertisement", "type": "Topic"},
                        {"value": "travel", "type": "Topic"},
                        // semantic triplets
                        {"value": "Sojern, performs, advertisement", "type": "Semantic Triplet"},
                    ],
                    "KPIs": [
                        {"value": 1, "type": "Timeline"},
                        {"value": 1, "type": "Pricing"},
                        {"value": 2, "type": "Q/A"},
                        {"value": 1, "type": "Competitor"},
                    ],
                    "transcript": "full salesman transcript...",

                },
                {
                    "from":4.4545,
                    "to":7.4545,
                    "sent": "--",
                    "speaker": "Client",
                    "tag": "sojern",
                    "summ": "client speech summary...",
                    "transcript": "full client transcript...",
                    "concepts": [
                        // named entities
                        {"value": "Sojern", "type": "Entity", "verbose": "Organization"},
                        {"value": "America", "type": "Entity", "verbose": "Location"},
                        // topics
                        {"value": "advertisement", "type": "Topic"},
                        {"value": "travel", "type": "Topic"},
                        // semantic triplets
                        {"value": "Sojern, performs, advertisement", "type": "Semantic Triplet"},
                    ],
                    "KPIs": [
                        {"value": 1, "type": "Timeline"},
                        {"value": 1, "type": "Pricing"},
                        {"value": 2, "type": "Q/A"},
                        {"value": 1, "type": "Competitor"},
                    ],
                },

            ],
        "stats": {
            "duration": 8,
            "speak2listen": "63%",
            "avg-speech": "4.3",
            "words": 450,
            "compete": 15,
            "timeline": 5,
            "sentiment": "++",
            "qask": 14,
            "interruptions": 6,
            "pricing-talk": 5

        },
        "topic": [
            {"name": "Product", "y": 23},
            {"name": "Price", "y": 37},
            {"name": "Competitor", "y": 10},
            {"name": "Company", "y": 40},
        ],
        "keywords": [
            ["decade", "experience", "travel", "marketing", "traveler", "pathway", "data", "perspective", "advertising", "marketing", "ecosystem", "platform", "overview", "year", "marketing", "demand", "engine", "travel", "traveler", "platform", "travel", "intent", "data", "search", "engine", "airline", "hotel", "property", "cruise", "operator", "transportation", "provider", "tourism", "operator", "campaign", "channel", "branding", "branding", "platform", "machine", "data", "signal", "travel", "audience", "segment", "brand", "marketer", "traveler", "location", "time", "message", "brand", "prospecting", "target", "traveler", "market", "service", "offering", "solution", "airline", "car", "rental", "company", "cruise", "line", "destination", "marketer", "hotel", "chain", "combination", "technology", "expertise", "brand", "loyalty", "drive", "booking", "site", "audience", "audience", "profile", "traveler", "platform", "data", "store", "traveler", "profile", "profile", "billion", "intent", "signal", "party", "data", "combination", "machine", "intelligence", "party", "data", "campaign", "performance", "solution", "book", "consultation", "report", "get", "the", "report", "read", "download", "report", "global", "travel"],
            [6, 3, 2, 3, 7, 4, 7, 1, 4, 2, 7, 0, 9, 0, 7, 1, 3, 2, 7, 1, 10, 5, 0, 5, 5, 2, 0, 4, 8, 4, 7, 7, 9, 8, 9, 10, 2, 1, 10, 10, 6, 6, 6, 2, 6, 5, 1, 1, 10, 6, 8, 5, 8, 0, 1, 2, 3, 7, 9, 1, 6, 4, 8, 4, 4, 0, 7, 6, 7, 7, 5, 0, 4, 8, 7, 3, 7, 10, 0, 5, 2, 10, 3, 10, 10, 10, 0, 10, 9, 2, 0, 7, 0, 4, 6, 1, 5, 9, 9, 6, 4, 2, 7, 2, 1, 4, 9, 6, 10, 10, 0],
        ],
        "summary": "The Sojern Traveler Platform is powered by the Sojern Data Store with over 350 million unique traveler profiles. These profiles are created by ingesting billions of intent signals, including your first party data, which is then processed through a combination of machine intelligence and human curation.",
    }
};

//// MUTATE CODE STARTS mutating object found
var mutate_count = 3;

function getSegObj(type){
    if (type == "client")
    return {
                    "from":3.4545,
                    "to":5.4545,
                    "sent": "--",
                    "speaker": "Client",
                    "tag": "sojern",
                    "summ": "client speech summary...",
                    "transcript": "full client transcript...",
                    "concepts": [
                        // named entities
                        {"value": "Sojern", "type": "Entity", "verbose": "Organization"},
                        {"value": "America", "type": "Entity", "verbose": "Location"},
                        // topics
                        {"value": "advertisement", "type": "Topic"},
                        {"value": "travel", "type": "Topic"},
                        // semantic triplets
                        {"value": "Sojern, performs, advertisement", "type": "Semantic Triplet"},
                    ],
                    "KPIs": [
                        {"value": 1, "type": "Timeline"},
                        {"value": 1, "type": "Pricing"},
                        {"value": 2, "type": "Q/A"},
                        {"value": 1, "type": "Competitor"},
                    ],
                };
        return {
                    "from":1.03434,
                    "to":1.44545,
                    "sent": "++",
                    "speaker": "Salesman",
                    "tag": "product",
                    "summ": "salesman speech summary...",
                    "concepts": [
                        // named entities
                        {"value": "Sojern", "type": "Entity", "verbose": "Organization"},
                        {"value": "America", "type": "Entity", "verbose": "Location"},
                        // topics
                        {"value": "advertisement", "type": "Topic"},
                        {"value": "travel", "type": "Topic"},
                        // semantic triplets
                        {"value": "Sojern, performs, advertisement", "type": "Semantic Triplet"},
                    ],
                    "KPIs": [
                        {"value": 1, "type": "Timeline"},
                        {"value": 1, "type": "Pricing"},
                        {"value": 2, "type": "Q/A"},
                        {"value": 1, "type": "Competitor"},
                    ],
                    "transcript": "full salesman transcript...",

                };
}

var pls = obj.clip.segments[1];
var dura = obj.clip.stats.duration;

for (var i=0; i<mutate_count; i++){
    var sale = getSegObj("type");

    var span = Math.random()*5 + 2;
    sale.from = pls.to;
    sale.to = sale.from + span;
    sale.tag = obj.clip.keywords[0][Math.round(Math.random()*110)];
    dura += span;

    var client = getSegObj("client");

    span = Math.random()*5 + 2;
    client.from = sale.to;
    client.to = client.from + span;
    client.tag = obj.clip.keywords[0][Math.round(Math.random()*110)];
    dura += span;

    pls = client;

    obj.clip.segments.push(sale);
    obj.clip.segments.push(client);
}
obj.clip.stats.duration = Math.ceil(dura);
///////// END MUTATE CODE

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var getColor = function(){
       var types = ["tag", "Entity", "Topic", "Semantic Triplet", "Timeline", "Pricing", "Q/A", "Competitor", "++", "--", "+", "-", "0"];
       var cols = ["purple", "blue", "teal", "violet", "red", "orange", "pink", "yellow", "green", "red", "green", "red", "grey"];
       return function (type){
            return cols[types.indexOf(type)];
       };
    }();

function getTags(spec){

    var compileHead = function(cur){
        return "\
            <h4 class=\"ui header\">\
                                          <i class=\"{0} icon\"></i>\
                                          <div class=\"content\">\
                                            {1}\
                                          </div>\
                                        </h4>\
            ".format(
            cur == "concepts"?"idea":"bullseye", // or "KPIs"
            cur
            );
    };

    var compileTag = function(tag, value){
        return "\
        <a class=\"ui {0} image label\">\
                              {1}\
                              <div class=\"detail\">{2}</div>\
                            </a>\
        ".format(getColor(tag), value, tag);
    };

    var compileCat = function(key, spec){
        var head = compileHead(key);
        var body = "";
        for (var i=0; i<spec[key].length; i++){
            body += compileTag(spec[key][i].type, spec[key][i].value);
        }
        return head + body;
    };
    var res = "";
    var key = "concepts";
    res += compileCat(key, spec);

    key = "KPIs";
    res += compileCat(key, spec);

    return res;


// "\
// <h4 class="ui header">
//                               <i class="idea icon"></i>
//                               <div class="content">
//                                 Concepts
//                               </div>
//                             </h4>


//                             <a class="ui teal image label">
//                               Veronika rules
//                               <div class="detail">Topic</div>
//                             </a>
//                             <a class="ui violet image label">
//                               Helen, Rules, Russia
//                               <div class="detail">Semantic triplet</div>
//                             </a>


//                             <h4 class="ui header">
//                               <i class="bullseye icon"></i>
//                               <div class="content">
//                                 KPIs
//                               </div>
//                             </h4>


//                             <a class="ui red image label">
//                               1
//                               <div class="detail">Timeline</div>
//                             </a>

//                             <a class="ui orange image label">
//                               1
//                               <div class="detail">Pricing</div>
//                             </a>

//                               <a class="ui pink image label">
//                               2
//                               <div class="detail">Q/A</div>
//                             </a>


//                             <a class="ui yellow image label">
//                               1
//                               <div class="detail">Competitor</div>
//                             </a>
// "

}





function round(dig){
    return (Math.round(dig) * 10)/10
}

function getSubIcon(sent){
    if (sent.length > 1){
        if (sent[1] == "+"){
            return "<i class=\"corner angle up double icon\"></i>";
        }
        return "<i class=\"corner angle down double icon\"></i>";
    }
    else{
        return "";
    }
}

var detail = function (){




    return function (spec){
        var tag = spec.tag;
        return "\
<div class=\"event\">\
                  <div class=\"label\">\
                    <i class=\"{0} icon\"></i>\
                  </div>\
                  <div class=\"content\">\
                    <div class=\"summary\">\
                      <a class=\"user\">\
                        {1}\
                      </a>\
\
                      <div class=\"date\">\
                      {2}s\
                    </div>\
                    <a class=\"ui {3} tag label\">{5}</a>\
                    </div>\
\
                    <!-- <div class=\"ui divider\"></div> -->\
                        <div class=\"ui extra accordion\">\
                          <div class=\"ui header title\">\
                            <i class=\"dropdown icon\"></i>\
                            {4}\
                          </div>\
                          <div class=\"content\">\
                            <h4 class=\"ui pipe-cat header\">\
                            <a class=\"ui {3} image label\">\
                              {5}\
                              <div class=\"detail\">Pipeline Category</div>\
                            </a>\
                            </h4>\
                          <h4 class=\"ui header\">\
                              <i class=\"heart icon\"></i>\
                              <div class=\"content\">\
                                Sentiment\
                                <i class=\"large icons\">\
                                    <i class=\"{6} icon\"></i>\
                                    {7}\
                                  </i>\
                              </div>\
                            </h4>\
                          {8}\
                            <h4 class=\"ui header\">\
                              <i class=\"align left icon\"></i>\
                              <div class=\"content\">\
                                Transcript\
                              </div>\
                            </h4>\
                            <p>{9}</p>\
                          </div>\
                        </div>\
                  </div>\
                </div>\
".format(spec.speaker[0]=="S"?"talk":"user",
spec.speaker,
round(spec.to-spec.from),
getColor("tag"), // change to spec.tag
spec.summ,
spec.tag,
spec.sent[0] == "-"?"frown":"smile",
getSubIcon(spec.sent),
getTags(spec),
spec.transcript);

    };
}();






// console.log("###############");
// console.log(detail(obj.clip.segments[0]));



// First, checks if it isn't implemented yet.


$(document).ready(function(){

var ls = 0;
var point_ls = "below";
var add_pause = false;
function clip_seg(spec){
    var els = []
    if (spec.from > ls){
        var pause = $("<div class=\"step disabled\">\
                        <div class=\"content\">\
                        <div class=\"floating ui grey label\">{0}</div>\
                          <div class=\"title\">. . .</div>\
                        </div>\
                      </div>".format(Math.round(spec.from*10)/10));
        pause.width("{0}%".format(((spec.from - ls) * 100 / dur)));
        if (add_pause)
            els.push(pause);
    }
    var actor = spec.speaker;
    var el = $("<a class=\"step {6} active\" href=\"#{11}\" data-html=\"<div class='header'>{9}</div><div class='content'>{10}</div>\">\
                      <div class=\"ui pointing{0} label\">\
                      {5}\
                      <i class=\"angle{3} {4} icon\"></i>\
                    </div>\
                        <i class=\"{1} icon\"></i>\
                        <div class=\"floating ui {7} label\">{8}</div>\
                        <!--<div class=\"content\">\
                          <div class=\"title\">{2}</div>\
                           <div class=\"description\">talks blah</div> \
                        </div>-->\
                      </a>".format(point_ls == "below"?"":" below", actor[0] == 'S'?"talk":"user", actor, spec.sent.length > 1?" double":"", spec.sent[0] == '+'?"up":"down", spec.tag, actor[0] == 'S'?"sales":"client", actor[0] == 'S'?"green":"red", Math.round(spec.to*10)/10, "{0}: {1}s".format(actor, Math.round(10 * (spec.to - spec.from))/10), spec.summ, spec.from));
    el.width("{0}%".format(((spec.to - spec.from) * 100 / dur)));
    els.push(el);
    ls = spec.to;
    point_ls = point_ls == "below"?"":"below";
    return els;
}


var segs = obj["clip"]["segments"];
var dur = obj["clip"].stats["duration"];
var lim = segs.length;
$cont = $($(".clip > .steps")[0]);
$cont.detach();

var $feed = $(".feed.conv");
//var $fcont = $(".feed-cont");
$feed.detach();

for (var i=0; i<lim; i++){

    var els = clip_seg(segs[i]);
    console.log(els);
    $cont.append(els[0]);
    if (els.length > 1){
        $cont.append(els[1]);
    }
    $feed.append($(detail(segs[i])));

}

$cont.appendTo(".clip");
$feed.appendTo(".feed-cont");

// activate step popups
$('.step.active')
  .popup()
;

// fill overview stats
for (stat in obj.clip.stats){
    if (stat != "sentiment")
    $("." + stat).text(obj.clip.stats[stat]);
}

$sento = $(".sentiment");
$sento.text("");

$sento.append($("<i class=\"icons\">\
                                    <i class=\"{0} icon\"></i>\
                                    {1}\
                                  </i>".format(obj.clip.stats.sentiment[0] == "-"?"frown":"smile",
getSubIcon(obj.clip.stats.sentiment))));

// activate dropdowns accordions
$('.ui.accordion')
  .accordion()
;

// overall summary
$("#o-summary").append($("<blockquote>").text(obj.clip.summary));

// adding feed





// $feed.append($(detail(obj.clip.segments[0])));

// Highcharts

// Pie-chart

 Highcharts.chart('container-pie', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Talk vs Listen: Salesman ',
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>', //: {point.percentage:.1f} %
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Speech',
                    colorByPoint: true,
                    data: [{
                        name: 'Talked',
                        y: parseInt(obj["clip"].stats.speak2listen)
                    }, {
                        name: 'Listened',
                        y: 100 - parseInt(obj["clip"].stats.speak2listen),
                        sliced: true,
                        selected: true
                    }]
                }]
});




 Highcharts.chart('pie-topic', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Topic Distribution',
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>', //: {point.percentage:.1f} %
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Topics',
                    colorByPoint: true,
                    data: obj.clip.topic
                }]
});

var words = [];

var keys = obj.clip.keywords;
var lim = keys[0].length;
for (var i=0; i<lim; i++){
    words.push({text: keys[0][i], size: keys[1][i]});
}

d3.wordcloud()
        .size([680, 200])
        .selector('#wordcloud')
        .words(words)
        .start();

});






//////////////////




/*
Highcharts.chart('container', {
    chart: {
        marginRight: 80 // like left
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: [{
        lineWidth: 1,
        title: {
            text: 'Primary Axis'
        }
    }, {
        lineWidth: 1,
        opposite: true,
        title: {
            text: 'Secondary Axis'
        }
    }],

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }, {
        data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2],
        yAxis: 1
    }]
});

*/

$(function () {
    var id = $("#container").data("id");
    function test(data){

            for (var cat in ["activity", "alerts"]){
                cat = ["activity", "alerts"][cat];
                for (el in data[cat]){
                    console.log(cat);
                    console.log(el);
                    console.log(data[cat][el]);
                    console.log(data[cat][el][0]);
                    var date_el = data[cat][el][0].split('-');
                    date_el[1] = parseInt(date_el[1]) - 1
                   data[cat][el][0] = Date.UTC.apply(null, date_el);
                }
            }

            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                plotOptions: {
                    line: {
                        connectNulls: true
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: { // don't display the dummy year
                        month: '%e. %b',
                        year: '%b'
                    },
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: [{
                    min: 0,
                    max: data.upper,
                    lineWidth: 1,
                    title: {
                        text: 'Sentiment'
                    }
                }, {
                    min: 0,
                    max: data.upper,
                    lineWidth: 1,
                    opposite: true,
                    title: {
                        text: 'Activity'
                    }
                }],
                title: {
                    text: 'Sentiment'
                },
                rangeSelector:{
                    enabled:true
                },
                series: [{
                    name: "sentiment",
                    data: data.alerts

                }, {
                    name: "activity",
                    data: data.activity,
                    yAxis: 1
                }]
            }); // end line curve

            // pie chart

            var monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
                ];





        }
        // function ends
        test({"upper": 2, "ends": "2017-06-28", "starts": "2017-06-28", "alerts": [["2017-06-27", 0], ["2017-06-28", 0]], "activity": [["2017-06-27", 0], ["2017-06-28", 0]], "percent_alerts": 60});






    });
