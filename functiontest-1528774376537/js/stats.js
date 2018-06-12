var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26313",
        "ok": "26313",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3052",
        "ok": "3052",
        "ko": "-"
    },
    "percentiles1": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles2": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3470",
        "ok": "3470",
        "ko": "-"
    },
    "percentiles4": {
        "total": "17076",
        "ok": "17069",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 54963,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 153,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4884,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.336",
        "ok": "199.336",
        "ko": "-"
    }
},
contents: {
"req_post-request-5f1f8": {
        type: "REQUEST",
        name: "post request",
path: "post request",
pathFormatted: "req_post-request-5f1f8",
stats: {
    "name": "post request",
    "numberOfRequests": {
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "26313",
        "ok": "26313",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "897",
        "ok": "897",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3052",
        "ok": "3052",
        "ko": "-"
    },
    "percentiles1": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles2": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3472",
        "ok": "3470",
        "ko": "-"
    },
    "percentiles4": {
        "total": "17067",
        "ok": "17067",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 54963,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 153,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4884,
        "percentage": 8
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.336",
        "ok": "199.336",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
