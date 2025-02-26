const _ = require('lodash');
const express = require('express');
const router = express.Router();
const winston = require('winston');
const logger = winston.loggers.get('logger');

const timeSerie = require('./series');
const countryTimeseries = require('./country-series');

let now = Date.now();

let decreaser;
for (var i = timeSerie.length - 1; i >= 0; i--) {
    const series = timeSerie[i];
    decreaser = 0;
    for (let y = series.datapoints.length - 1; y >= 0; y--) {
        series.datapoints[y][1] = Math.round((now - decreaser) / 1000) * 1000;
        decreaser += 50000;
    }
}

var annotation = {
    name: "annotation name",
    enabled: true,
    datasource: "generic datasource",
    showLine: true,
}

var annotations = [
    {
        annotation: annotation,
        "title": "Donlad trump is kinda funny",
        "time": 1450754160000,
        text: "teeext",
        tags: "taaags"
    },
    {annotation: annotation, "title": "Wow he really won", "time": 1450754160000, text: "teeext", tags: "taaags"},
    {annotation: annotation, "title": "When is the next ", "time": 1450754160000, text: "teeext", tags: "taaags"}
];

var tagKeys = [
    {"type": "string", "text": "Country"}
];

var countryTagValues = [
    {'text': 'SE'},
    {'text': 'DE'},
    {'text': 'US'}
];

now = Date.now();
decreaser = 0;
for (let i = 0; i < annotations.length; i++) {
    let anon = annotations[i];

    anon.time = (now - decreaser);
    decreaser += 1000000
}

var table =
    {
        columns: [{text: 'Time', type: 'time'}, {text: 'Country', type: 'string'}, {text: 'Number', type: 'number'}],
        rows: [
            [1234567, 'SE', 123],
            [1234567, 'DE', 231],
            [1234567, 'US', 321],
        ]
    };

function setCORSHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
}


now = Date.now();
decreaser = 0;
for (var i = 0; i < table.rows.length; i++) {
    var anon = table.rows[i];

    anon[0] = (now - decreaser);
    decreaser += 1000000
}

router.all('/', function (req, res) {
    
    res.send('I have a quest for you!');
    res.end();
});

router.all('/search', function (req, res) {
    
    var result = [];
    _.each(timeSerie, function (ts) {
        result.push(ts.target);
    });

    res.json(result);
    res.end();
});

router.all('/annotations', function (req, res) {
    
    console.log(req.url);
    console.log(req.body);

    res.json(annotations);
    res.end();
});

router.all('/query', function (req, res) {
    
    console.log(req.url);
    console.log(req.body);

    var tsResult = [];
    let fakeData = timeSerie;

    if (req.body.adhocFilters && req.body.adhocFilters.length > 0) {
        fakeData = countryTimeseries;
    }

    _.each(req.body.targets, function (target) {
        if (target.type === 'table') {
            tsResult.push(table);
        } else {
            var k = _.filter(fakeData, function (t) {
                return t.target === target.target;
            });

            _.each(k, function (kk) {
                tsResult.push(kk)
            });
        }
    });

    res.json(tsResult);
    res.end();
});

router.all('/tag[\-]keys', function (req, res) {
    
    console.log(req.url);
    console.log(req.body);

    res.json(tagKeys);
    res.end();
});

router.all('/tag[\-]values', function (req, res) {

    console.log(req.url);
    console.log(req.body);

    if (req.body.key === 'City') {
        res.json(cityTagValues);
    } else if (req.body.key === 'Country') {
        res.json(countryTagValues);
    }
    res.end();
});