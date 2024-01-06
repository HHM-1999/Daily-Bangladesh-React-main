'use strict';

var express = require('express');
var fs = require('fs');
var path = require("path");

var app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');

const cors = require('cors');

const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    extended: false
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

var FONT_DOMAIN_URL = 'https://www.daily-bangladesh.com/'
var BACK_END_URL = 'https://backoffice.daily-bangladesh.com/'
var http = require('http');
// var https = require('https');

// var privateKey = fs.readFileSync('/mnt/volume_sgp1_05/cyy0b1ry@@t/domains/backoffice.chhobirhaat.com/ssl.key', 'utf8');
// var certificate = fs.readFileSync('/mnt/volume_sgp1_05/cyy0b1ry@@t/domains/backoffice.chhobirhaat.com/ssl.cert', 'utf8');

// var credentials = { key: privateKey, cert: certificate };

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

var dbConn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // user: 'root',
    // password: '',
    user: 'tdsuserx',
    password: 'D3rF!@?2#4%6',
    database: 'dailybd_content_db',
    // insecureAuth: true,
    multipleStatements: true
});
var dbConnEn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // user: 'root',
    // password: '',
    user: 'tdsuserx',
    password: 'D3rF!@?2#4%6',
    database: 'dailybd_content_db_en',
    // insecureAuth: true,
    multipleStatements: true
});

var dbConnMedia = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // user: 'root',
    // password: '',
    user: 'tdsuserx',
    password: 'D3rF!@?2#4%6',
    database: 'dailybd_media_db',
    // insecureAuth: true,
    multipleStatements: true
});

// =========datebase connection=======
dbConn.connect();
dbConnEn.connect();
dbConnMedia.connect();

// app.enable('trust proxy')

// app.use(function (request, response, next) {
//     if (request.secure && request.headers.host.slice(0, 4) !== "www.") {
//         var newHost = "www." + request.headers.host;
//         return response.redirect(301, request.protocol + "://" + newHost + request.originalUrl);
//     }
//     else if (!request.secure && request.headers.host.slice(0, 4) !== "www.") {
//         var newHost = "www." + request.headers.host;
//         return response.redirect(301, "https://" + newHost + request.url);
//     }
//     else if (!request.secure && request.headers.host.slice(0, 4) === "www.") {
//         return response.redirect(301, "https://" + request.headers.host + request.url);
//     }
//     next();
// })


app.get('/', function (request, response) {
    console.log('Home page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + request.originalUrl;
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/namaz', function (request, response) {
    console.log('namaz page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'নামাজের সময়সূচি :: Salah Time in Bangladesh');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/converter', function (request, response) {
    console.log('converter page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'Bangla Bijoy to Unicode Converter web tool');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/all_tags', function (request, response) {
    console.log('all_tags page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'ট্যাগ সমূহ');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/all_writers', function (request, response) {
    console.log('all_writers page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'লেখক সমূহ');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/archives', function (request, response) {
    console.log('archive page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'আর্কাইভস');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/video-gallery', function (request, response) {
    console.log('video-gallery page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'ভিডিও গ্যালারী');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/english', function (request, response) {
    console.log('English Home page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'Daily Bangladesh English :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper");
        data = data.replace(/\$OG_IMAGE_ALT/g, 'Daily Bangladesh English :: ডেইলি বাংলাদেশ');
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});


app.get('/ads.txt', function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    console.log('ads.txt visited!');
    const filePath = path.resolve(__dirname, './', 'ads.txt');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/google6f9a6ead640a0940.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('google6f9a6ead640a0940.html visited!');
    const filePath = path.resolve(__dirname, './', 'google6f9a6ead640a0940.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/google65ac998b8d3f8e06.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('google65ac998b8d3f8e06.html visited!');
    const filePath = path.resolve(__dirname, './', 'google65ac998b8d3f8e06.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/google993fcb2c41291e6c.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('google993fcb2c41291e6c.html visited!');
    const filePath = path.resolve(__dirname, './', 'google993fcb2c41291e6c.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/googlef0bfc4afe1f26355.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('googlef0bfc4afe1f26355.html visited!');
    const filePath = path.resolve(__dirname, './', 'googlef0bfc4afe1f26355.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/pinterest-574bb.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('pinterest-574bb.html visited!');
    const filePath = path.resolve(__dirname, './', 'pinterest-574bb.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/pinterest-9724a.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('pinterest-9724a.html visited!');
    const filePath = path.resolve(__dirname, './', 'pinterest-9724a.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/pinterest-a92fd.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('pinterest-a92fd.html visited!');
    const filePath = path.resolve(__dirname, './', 'pinterest-a92fd.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/pinterest-e6d70.html', function (request, response) {
    response.setHeader('Content-Type', 'text/html');
    console.log('pinterest-e6d70.html visited!');
    const filePath = path.resolve(__dirname, './', 'pinterest-e6d70.html');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/bangla-sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('bangla-sitemap.xml visited!');
    const filePath = path.resolve(__dirname, './sitemap', 'bangla-sitemap.xml');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/english-sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('english-sitemap.xml visited!');
    const filePath = path.resolve(__dirname, './sitemap', 'english-sitemap.xml');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
});

app.get('/robots.txt', function (request, response) {
    response.setHeader('Content-Type', 'text/plain');
    console.log('robots.txt visited!');

    let xml = `User-agent: *\nAllow: /\n\nSitemap: https://www.daily-bangladesh.com/sitemap.xml\nSitemap: https://www.daily-bangladesh.com/bangla-sitemap.xml\nSitemap: https://www.daily-bangladesh.com/english-sitemap.xml\n`
    var todate = new Date()
    xml += `Sitemap: https://www.daily-bangladesh.com/bangla-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml\nSitemap: https://www.daily-bangladesh.com/english-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml\n`
    todate.setHours(23, 59, 59, 999)
    for (let i = 0; i < 30; i++) {
        todate.setDate(todate.getDate() - 1)
        xml += `Sitemap: https://www.daily-bangladesh.com/bangla-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml\nSitemap: https://www.daily-bangladesh.com/english-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml\n`
    }
    for (let i = 0; i < 70; i++) {
        xml += `Sitemap: https://www.daily-bangladesh.com/sitemap-bn/sitemap-bn-${i + 1}.xml\n`
    }
    for (let i = 0; i < 16; i++) {
        xml += `Sitemap: https://www.daily-bangladesh.com/sitemap-en/sitemap-en-${i + 1}.xml\n`
    }
    xml += `Sitemap: https://www.daily-bangladesh.com/bangla-news-sitemap.xml\nSitemap: https://www.daily-bangladesh.com/english-news-sitemap.xml\n`
    response.send(xml);
});

app.get('/sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('sitemap.xml visited!');

    let xml = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>https://www.daily-bangladesh.com/bangla-sitemap.xml</loc>
        </sitemap>
        <sitemap>
            <loc>https://www.daily-bangladesh.com/english-sitemap.xml</loc>
        </sitemap>`
    var todate = new Date()
    xml += `<sitemap>
        <loc>https://www.daily-bangladesh.com/bangla-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml</loc>
        <lastmod>${todate.toISOString()}</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://www.daily-bangladesh.com/english-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml</loc>
        <lastmod>${todate.toISOString()}</lastmod>
    </sitemap>`
    todate.setHours(23, 59, 59, 999)
    for (let i = 0; i < 30; i++) {
        todate.setDate(todate.getDate() - 1)
        xml += `<sitemap>
            <loc>https://www.daily-bangladesh.com/bangla-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml</loc>
            <lastmod>${todate.toISOString()}</lastmod>
        </sitemap>
        <sitemap>
            <loc>https://www.daily-bangladesh.com/english-sitemap/sitemap-daily-${todate.getFullYear()}-${todate.getMonth() < 9 ? '0' + (todate.getMonth() + 1) : todate.getMonth() + 1}-${todate.getDate() < 10 ? '0' + todate.getDate() : todate.getDate()}.xml</loc>
            <lastmod>${todate.toISOString()}</lastmod>
        </sitemap>`
    }
    for (let i = 0; i < 70; i++) {
        xml += `<sitemap>
            <loc>https://www.daily-bangladesh.com/sitemap-bn/sitemap-bn-${i + 1}.xml</loc>
            <lastmod>${todate.toISOString()}</lastmod>
        </sitemap>`
    }
    for (let i = 0; i < 16; i++) {
        xml += `<sitemap>
            <loc>https://www.daily-bangladesh.com/sitemap-en/sitemap-en-${i + 1}.xml</loc>
            <lastmod>${todate.toISOString()}</lastmod>
        </sitemap>`
    }
    xml += `</sitemapindex>`;
    response.send(xml);
});


app.get('/sitemap-bn/:sitemap', function (request, response) {
    let sitemap = request.params.sitemap
    console.log(`sitemap-bn/${sitemap} visited!`);
    if (!sitemap || !sitemap.includes("sitemap-bn-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let c = sitemap.replace('sitemap-bn-', '').replace('.xml', '')
    let partition = '';
    let offset = '';
    if (c <= 10) {
        partition = ' PARTITION(p0) ';
    } else if (c > 10 && c <= 20) {
        partition = ' PARTITION(p1) ';
    } else if (c > 20 && c <= 30) {
        partition = ' PARTITION(p2) ';
    } else if (c > 30 && c <= 40) {
        partition = ' PARTITION(p3) ';
    } else if (c > 40 && c <= 50) {
        partition = ' PARTITION(p4) ';
    } else if (c > 50 && c <= 60) {
        partition = ' PARTITION(p5) ';
    } else if (c > 60) {
        partition = ' PARTITION(p6) ';
    }

    if (c > 70) {
        offset = ` OFFSET ${((c - 61) / 2) * 10}000 `;
    } else if (c % 10 == 0) {
        offset = ' OFFSET 45000 ';
    } else if (c % 10 == 1) {
        offset = ' OFFSET 0 ';
    } else if (c % 10 == 2) {
        offset = ' OFFSET 5000 ';
    } else if (c % 10 == 3) {
        offset = ' OFFSET 10000 ';
    } else if (c % 10 == 4) {
        offset = ' OFFSET 15000 ';
    } else if (c % 10 == 5) {
        offset = ' OFFSET 20000 ';
    } else if (c % 10 == 6) {
        offset = ' OFFSET 25000 ';
    } else if (c % 10 == 7) {
        offset = ' OFFSET 30000 ';
    } else if (c % 10 == 8) {
        offset = ' OFFSET 35000 ';
    } else if (c % 10 == 9) {
        offset = ' OFFSET 40000 ';
    }

    response.setHeader('Content-Type', 'application/xml');

    let sql = `SELECT bn_contents.ContentID, bn_contents.ContentHeading, bn_contents.ImageSmPath, bn_contents.ImageBgPath, bn_contents.ImageBgPathCaption, bn_contents.created_at, bn_contents.updated_at, bn_contents.URLAlies, DATE_FORMAT(bn_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(bn_contents.updated_at, "%Y-%m-%d") as fupdated_at, bn_bas_categories.Slug FROM bn_contents ${partition} INNER JOIN bn_bas_categories ON bn_contents.CategoryIDs=bn_bas_categories.CategoryID WHERE bn_contents.Deletable=1 AND bn_contents.ShowContent=1 ORDER BY bn_contents.ContentID ASC LIMIT 5000 ${offset}`;
    // response.send(sql);
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
            for (let i = 0; i < result.length; i++) {
                let lastmoddate = '';
                if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                    lastmoddate = result[i].updated_at;
                } else {
                    lastmoddate = result[i].created_at;
                }
                let moddate = new Date(lastmoddate)
                xml += `<url>
                <loc>https://www.daily-bangladesh.com/${result[i].Slug}/${result[i].ContentID}</loc>
                    <image:image>
                        <image:loc>${result[i].ImageBgPath ? 'https://backoffice.daily-bangladesh.com/media/imgAll/' + (result[i].ImageBgPath).replace(/&/g, "%26") : (result[i].ImageSmPath ? 'https://backoffice.daily-bangladesh.com/media/imgAll/' + (result[i].ImageSmPath).replace(/&/g, "%26") : 'https://www.daily-bangladesh.com/media/common/logo-fb.png')}</image:loc>
                        <image:caption>
                                <![CDATA[ ${result[i].ImageBgPathCaption ? (result[i].ImageBgPathCaption).replace(/&/g, "&amp;") : (result[i].ContentHeading).replace(/&lsquo;/g, "").replace(/&rsquo;/g, "").replace(/&/g, "&amp;")} ]]>
                            </image:caption>
                    </image:image>
                    <changefreq>hourly</changefreq>
                    <lastmod>${moddate.toISOString()}</lastmod>
                </url>`

                if (i == result.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    })
});

app.get('/sitemap-en/:sitemap', function (request, response) {
    let sitemap = request.params.sitemap
    console.log(`sitemap-en/${sitemap} visited!`);
    if (!sitemap || !sitemap.includes("sitemap-en-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let c = sitemap.replace('sitemap-en-', '').replace('.xml', '')
    let partition = '';
    let offset = '';
    if (c <= 10) {
        partition = ' PARTITION(p0) ';
    } else if (c > 10) {
        partition = ' PARTITION(p1) ';
    }

    if (c > 20) {
        offset = ` OFFSET ${((c - 11) / 2) * 10}000 `;
    } else if (c % 10 == 0) {
        offset = ' OFFSET 45000 ';
    } else if (c % 10 == 1) {
        offset = ' OFFSET 0 ';
    } else if (c % 10 == 2) {
        offset = ' OFFSET 5000 ';
    } else if (c % 10 == 3) {
        offset = ' OFFSET 10000 ';
    } else if (c % 10 == 4) {
        offset = ' OFFSET 15000 ';
    } else if (c % 10 == 5) {
        offset = ' OFFSET 20000 ';
    } else if (c % 10 == 6) {
        offset = ' OFFSET 25000 ';
    } else if (c % 10 == 7) {
        offset = ' OFFSET 30000 ';
    } else if (c % 10 == 8) {
        offset = ' OFFSET 35000 ';
    } else if (c % 10 == 9) {
        offset = ' OFFSET 40000 ';
    }

    response.setHeader('Content-Type', 'application/xml');

    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.ImageSmPath, en_contents.ImageBgPath, en_contents.ImageBgPathCaption, en_contents.created_at, en_contents.updated_at, en_contents.URLAlies,DATE_FORMAT(en_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(en_contents.updated_at, "%Y-%m-%d") as fupdated_at, en_bas_categories.Slug FROM en_contents ${partition} INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID ASC LIMIT 5000 ${offset}`;
    // response.send(sql);
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
            for (let i = 0; i < result.length; i++) {
                let lastmoddate = '';
                if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                    lastmoddate = result[i].updated_at;
                } else {
                    lastmoddate = result[i].created_at;
                }
                let moddate = new Date(lastmoddate)
                xml += `<url>
                <loc>https://www.daily-bangladesh.com/english/${result[i].Slug}/${result[i].ContentID}</loc>
                    <image:image>
                        <image:loc>${result[i].ImageBgPath ? 'https://backoffice.daily-bangladesh.com/media/imgAll/' + (result[i].ImageBgPath).replace(/&/g, "%26") : (result[i].ImageSmPath ? 'https://backoffice.daily-bangladesh.com/media/imgAll/' + (result[i].ImageSmPath).replace(/&/g, "%26") : 'https://www.daily-bangladesh.com/media/common/logoEn-fb.png')}</image:loc>
                        <image:caption>
                                <![CDATA[ ${result[i].ImageBgPathCaption ? (result[i].ImageBgPathCaption).replace(/&/g, "&amp;") : (result[i].ContentHeading).replace(/&lsquo;/g, "").replace(/&rsquo;/g, "").replace(/&/g, "&amp;")} ]]>
                            </image:caption>
                    </image:image>
                    <changefreq>hourly</changefreq>
                    <lastmod>${moddate.toISOString()}</lastmod>
                </url>`

                if (i == result.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    })
});

app.get('/sitemap-video/:sitemap', function (request, response) {
    let sitemap = request.params.sitemap
    console.log(`sitemap-video/${sitemap} visited!`);
    if (!sitemap || !sitemap.includes("sitemap-video-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
    let c = sitemap.replace('sitemap-video-', '').replace('.xml', '')
    let offset = ` OFFSET ${((c - 1) / 2) * 10000} `;

    response.setHeader('Content-Type', 'application/xml');

    let sql = `SELECT WebTVID, WebTVHeading, WebTVLinkCode, SourceType, Remarks, created_at, updated_at FROM tv_webtvs WHERE Deletable=1 ORDER BY WebTVID ASC LIMIT 5000 ${offset}`;
    // response.send(sql);
    dbConnMedia.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
            for (let i = 0; i < result.length; i++) {
                let lastmoddate = '';
                if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                    lastmoddate = result[i].updated_at;
                } else {
                    lastmoddate = result[i].created_at;
                }
                let moddate = new Date(lastmoddate)
                xml += `<url>
                    <loc>https://www.daily-bangladesh.com/video/show/${result[i].WebTVID}</loc>
                    <video:video>
                    <video:thumbnail_loc>https://img.youtube.com/vi/${result[i].WebTVLinkCode}/0.jpg</video:thumbnail_loc>
                    <video:title>${result[i].WebTVHeading}</video:title>
                    <video:description>${result[i].Remarks ? result[i].Remarks : result[i].WebTVHeading}</video:description>
                    <video:player_loc>
                        ${result[i].SourceType == 1 ? "https://www.youtube.com/embed/" + result[i].WebTVLinkCode + "?autoplay=1" : result[i].SourceType == 2 ? "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F" + result[i].WebTVLinkCode + "%2F&show_text=0&width=560" : result[i].SourceType == 3 ? "https://player.vimeo.com/video/" + result[i].WebTVLinkCode : ''}
                    </video:player_loc>
                    <video:publication_date>${moddate.toISOString()}</video:publication_date>
                    <video:family_friendly>yes</video:family_friendly>
                    <video:live>no</video:live>
                    </video:video>
                </url>`

                if (i == result.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    })
});


app.get('/bangla-sitemap/:dailysitemap', function (request, response) {
    console.log('bangla-sitemap/dailysitemap visited!');
    let dailysitemap = request.params.dailysitemap
    if (!dailysitemap || !dailysitemap.includes("sitemap-daily-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }

    let date = dailysitemap.replace('sitemap-daily-', '').replace('.xml', '')
    let datearr = date.split("-")
    let date_ob = new Date(date);
    if (!isNaN(date_ob) && datearr.length === 3 && datearr[0].length === 4 && datearr[1].length === 2 && datearr[2].length === 2) { // d.getTime() or d.valueOf() will also work
        // date object is valid
        response.setHeader('Content-Type', 'application/xml');
        let partitionQRY = ''
        if (date >= '2022-02-21') {
            partitionQRY = ' PARTITION(p6) '
        }
        let sql = `SELECT bn_contents.ContentID, bn_contents.ContentHeading, bn_contents.URLAlies, bn_contents.ImageBgPath, bn_contents.ImageBgPathCaption, bn_contents.created_at, bn_contents.updated_at, bn_bas_categories.Slug FROM bn_contents ${partitionQRY} JOIN bn_bas_categories ON bn_contents.CategoryIDs=bn_bas_categories.CategoryID WHERE bn_contents.Deletable=1 AND bn_contents.ShowContent=1 AND DATE(bn_contents.created_at) = '${date}'`;
        // console.log(sql);
        dbConn.query(sql, function (error, result) {
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
            if (result && result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    let lastmoddate = '';
                    if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                        lastmoddate = result[i].updated_at;
                    } else {
                        lastmoddate = result[i].created_at;
                    }
                    let moddate = new Date(lastmoddate)

                    xml += `<url>
                        <loc>https://www.daily-bangladesh.com/${result[i].Slug}/${result[i].ContentID}</loc>
                        <image:image>
                            <image:loc>https://backoffice.daily-bangladesh.com/media/imgAll/${result[i].ImageBgPath}</image:loc>
                            <image:caption>
                                <![CDATA[ ${(result[i].ImageBgPathCaption).replace("&", "&amp;")} ]]>
                            </image:caption>
                        </image:image>
                        <changefreq>hourly</changefreq>
                        <lastmod>${moddate.toISOString()}</lastmod>
                    </url>`
                }
            }
            xml += `</urlset>`;
            response.send(xml);
        });
        // console.log('valid');
        // response.send(xml);
    } else {
        // date object is not valid
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
});

app.get('/english-sitemap/:dailysitemap', function (request, response) {
    console.log('english-sitemap/dailysitemap visited!');
    let dailysitemap = request.params.dailysitemap
    if (!dailysitemap || !dailysitemap.includes("sitemap-daily-")) {
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }

    let date = dailysitemap.replace('sitemap-daily-', '').replace('.xml', '')
    let datearr = date.split("-")
    let date_ob = new Date(date);
    if (!isNaN(date_ob) && datearr.length === 3 && datearr[0].length === 4 && datearr[1].length === 2 && datearr[2].length === 2) { // d.getTime() or d.valueOf() will also work
        // date object is valid
        response.setHeader('Content-Type', 'application/xml');
        let partitionQRY = ''
        if (date >= '2020-09-12') {
            partitionQRY = ' PARTITION(p1) '
        }
        let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.URLAlies, en_contents.ImageBgPath, en_contents.ImageBgPathCaption, en_contents.created_at, en_contents.updated_at, en_bas_categories.Slug FROM en_contents ${partitionQRY} JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 AND DATE(en_contents.created_at) = '${date}'`;
        // console.log(sql);
        dbConnEn.query(sql, function (error, result) {
            let xml = `<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
            if (result && result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    let lastmoddate = '';
                    if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                        lastmoddate = result[i].updated_at;
                    } else {
                        lastmoddate = result[i].created_at;
                    }
                    let moddate = new Date(lastmoddate)

                    xml += `<url>
                        <loc>https://www.daily-bangladesh.com/english/${result[i].Slug}/${result[i].ContentID}</loc>
                        <image:image>
                            <image:loc>https://backoffice.daily-bangladesh.com/media/imgAll/${result[i].ImageBgPath}</image:loc>
                            <image:caption>
                                <![CDATA[ ${(result[i].ImageBgPathCaption).replace("&", "&amp;")} ]]>
                            </image:caption>
                        </image:image>
                        <changefreq>hourly</changefreq>
                        <lastmod>${moddate.toISOString()}</lastmod>
                    </url>`
                }
            }
            xml += `</urlset>`;
            response.send(xml);
        });
        // console.log('valid');
        // response.send(xml);
    } else {
        // date object is not valid
        return response.send({ error: true, message: 'Invalid Sitemap Request' });
    }
});

app.get('/bangla-news-sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('bangla-news-sitemap.xml visited!');

    let sql = `SELECT bn_contents.ContentID, bn_contents.ContentHeading, bn_contents.URLAlies,DATE_FORMAT(bn_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(bn_contents.updated_at, "%Y-%m-%d") as fupdated_at, bn_bas_categories.Slug FROM bn_contents PARTITION(p6) INNER JOIN bn_bas_categories ON bn_contents.CategoryIDs=bn_bas_categories.CategoryID WHERE bn_contents.Deletable=1 AND bn_contents.ShowContent=1 ORDER BY bn_contents.ContentID DESC LIMIT 500`;
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;
            for (let i = 0; i < result.length; i++) {
                let date = '';
                if (result[i].fupdated_at && result[i].fupdated_at != '0000-00-00') {
                    date = result[i].fupdated_at;
                } else {
                    date = result[i].fcreated_at;
                }
                xml += `<url>
                    <loc>https://www.daily-bangladesh.com/${result[i].Slug}/${result[i].ContentID}</loc>
                    <news:news>
                        <news:publication>
                        <news:name>ডেইলি বাংলাদেশ</news:name>
                        <news:language>bn</news:language>
                        </news:publication>
                        <news:publication_date>${date}</news:publication_date>
                        <news:title>${(result[i].ContentHeading).replace("&", "&amp;")}</news:title>
                    </news:news>
                </url>`

                if (i == result.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    })
});

app.get('/english-news-sitemap.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('english-news-sitemap.xml visited!');

    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.URLAlies,DATE_FORMAT(en_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(en_contents.updated_at, "%Y-%m-%d") as fupdated_at, en_bas_categories.Slug FROM en_contents PARTITION(p1) INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID DESC LIMIT 500`;
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;
            for (let i = 0; i < result.length; i++) {
                let date = '';
                if (result[i].fupdated_at && result[i].fupdated_at != '0000-00-00') {
                    date = result[i].fupdated_at;
                } else {
                    date = result[i].fcreated_at;
                }
                xml += `<url>
                    <loc>https://www.daily-bangladesh.com/english/${result[i].Slug}/${result[i].ContentID}</loc>
                    <news:news>
                        <news:publication>
                        <news:name>Daily Bangladesh</news:name>
                        <news:language>en</news:language>
                        </news:publication>
                        <news:publication_date>${date}</news:publication_date>
                        <news:title>${(result[i].ContentHeading).replace("&", "&amp;")}</news:title>
                    </news:news>
                </url>`

                if (i == result.length - 1) {
                    xml += `</urlset>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    })
});


// app.get('/rss/rss.xml', function (request, response) {
//     response.setHeader('Content-Type', 'application/xml');
//     console.log('rss.xml visited!');

//     let date_ob = new Date();
//     let weekdayname = ''
//     let weekday = date_ob.getDay()
//     if (weekday === 0) {
//         weekdayname = 'Sun'
//     } else if (weekday === 1) {
//         weekdayname = 'Mon'
//     } else if (weekday === 2) {
//         weekdayname = 'Tue'
//     } else if (weekday === 3) {
//         weekdayname = 'Wed'
//     } else if (weekday === 4) {
//         weekdayname = 'Thu'
//     } else if (weekday === 5) {
//         weekdayname = 'Fri'
//     } else if (weekday === 6) {
//         weekdayname = 'Sat'
//     }
//     let day = date_ob.getDate()
//     let monthname = ''
//     let month = date_ob.getMonth()
//     if (month === 0) {
//         monthname = 'Jan'
//     } else if (month === 1) {
//         monthname = 'Feb'
//     } else if (month === 2) {
//         monthname = 'Mar'
//     } else if (month === 3) {
//         monthname = 'Apr'
//     } else if (month === 4) {
//         monthname = 'May'
//     } else if (month === 5) {
//         monthname = 'Jun'
//     } else if (month === 6) {
//         monthname = 'Jul'
//     } else if (month === 7) {
//         monthname = 'Aug'
//     } else if (month === 8) {
//         monthname = 'Sep'
//     } else if (month === 9) {
//         monthname = 'Oct'
//     } else if (month === 10) {
//         monthname = 'Nov'
//     } else if (month === 11) {
//         monthname = 'Dec'
//     }
//     let year = date_ob.getFullYear()
//     let curdate = `${weekdayname}, ${day} ${monthname} ${year}`

//     let xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
//         <channel>
//             <title>
//                 <![CDATA[ Daily Bangladesh :: ডেইলি বাংলাদেশ ]]>
//             </title>
//             <description>
//                 <![CDATA[ Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'. ]]>
//             </description>
//             <link>https://www.daily-bangladesh.com/</link>
//             <image>
//                 <url>https://backoffice.daily-bangladesh.com/media/common/logo-fb.png</url>
//                 <title>DailyBangladesh - RSS</title>
//                 <link>https://www.daily-bangladesh.com/</link>
//             </image>
//             <generator>RSS by DailyBangladesh</generator>
//             <lastBuildDate>${curdate}</lastBuildDate>
//             <copyright>
//                 <![CDATA[ Copyright: (C) DailyBangladesh. ]]>
//             </copyright>
//             <language>
//                 <![CDATA[ bn ]]>
//             </language>
//             <ttl>15</ttl>
//             <atom:link href="https://www.daily-bangladesh.com/rss/rss.xml" rel="self" type="application/rss+xml"/>`;

//     const requestBangla = axios.get('https://backoffice.daily-bangladesh.com/api/json/file/generateLatest.json');
//     const requestEnglish = axios.get('https://backoffice.daily-bangladesh.com/api-en/json/file/generateLatest.json');
//     var news = [];

//     axios.all([requestBangla, requestEnglish]).then(axios.spread((...responses) => {
//     // axios
//     //     .get('https://backoffice.daily-bangladesh.com/api/json/file/generateLatest.json')
//     //     .then(res => {
//         // console.log(responses);
//         // console.log(`statusCode: ${responses.status}`);
//         news=(responses[0].data.data).concat(responses[1].data.data)
//         // console.log(news);
//         if (news && news.length > 0) {
//             for (let i = 0; i < news.length; i++) {
//                 // let date = '';
//                 // if (res.data.data[i].fupdated_at) {
//                 //     date = res.data.data[i].fupdated_at;
//                 // } else {
//                 //     date = res.data.data[i].fcreated_at;
//                 // }
//                 xml += `<item>
//                     <title>
//                         <![CDATA[ ${(news[i].ContentHeading).replace("&", "&amp;")} ]]>
//                     </title>
//                     <description>
//                         <![CDATA[ ${news[i].ContentBrief} ]]>
//                     </description>
//                     <link>https://www.daily-bangladesh.com/${news[i].Slug}/${news[i].ContentID}/</link>
//                     <guid isPermaLink="true">https://www.daily-bangladesh.com/${i>=responses[0].data.data.length ? 'english/' : ''}${news[i].Slug}/${news[i].ContentID}/</guid>
//                     <pubDate>${news[i].create_date}:00 +0600</pubDate>
//                 </item>`

//                 if (i === news.length - 1) {
//                     xml += `</channel>
//                     </rss>`;
//                     response.send(xml);
//                 }
//             }
//         }
//         else {
//             response.send('');
//         }
//         // response.send(res.data.home_latest);
//     }))
//     .catch(errors  => {
//         console.error(errors);
//         response.send('');
//     });
// });

app.get('/rss/rss.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('rss.xml visited!');

    let date_ob = new Date();
    let weekdayname = ''
    let weekday = date_ob.getDay()
    if (weekday === 0) {
        weekdayname = 'Sun'
    } else if (weekday === 1) {
        weekdayname = 'Mon'
    } else if (weekday === 2) {
        weekdayname = 'Tue'
    } else if (weekday === 3) {
        weekdayname = 'Wed'
    } else if (weekday === 4) {
        weekdayname = 'Thu'
    } else if (weekday === 5) {
        weekdayname = 'Fri'
    } else if (weekday === 6) {
        weekdayname = 'Sat'
    }
    let day = date_ob.getDate()
    let monthname = ''
    let month = date_ob.getMonth()
    if (month === 0) {
        monthname = 'Jan'
    } else if (month === 1) {
        monthname = 'Feb'
    } else if (month === 2) {
        monthname = 'Mar'
    } else if (month === 3) {
        monthname = 'Apr'
    } else if (month === 4) {
        monthname = 'May'
    } else if (month === 5) {
        monthname = 'Jun'
    } else if (month === 6) {
        monthname = 'Jul'
    } else if (month === 7) {
        monthname = 'Aug'
    } else if (month === 8) {
        monthname = 'Sep'
    } else if (month === 9) {
        monthname = 'Oct'
    } else if (month === 10) {
        monthname = 'Nov'
    } else if (month === 11) {
        monthname = 'Dec'
    }
    let year = date_ob.getFullYear()
    let curdate = `${weekdayname}, ${day} ${monthname} ${year}`

    let sql = `SELECT bn_contents.ContentID, bn_contents.ContentHeading, bn_contents.ContentBrief, bn_contents.ImageBgPath, bn_contents.URLAlies,DATE_FORMAT(bn_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(bn_contents.updated_at, "%Y-%m-%d") as fupdated_at, DATE_FORMAT(bn_contents.created_at, '%W, %e %M %Y, %H:%i') as create_date, DATE_FORMAT(bn_contents.updated_at, '%W, %e %M %Y, %H:%i') as updated_date, bn_bas_categories.Slug FROM bn_contents PARTITION(p6) INNER JOIN bn_bas_categories ON bn_contents.CategoryIDs=bn_bas_categories.CategoryID WHERE bn_contents.Deletable=1 AND bn_contents.ShowContent=1 ORDER BY bn_contents.ContentID DESC LIMIT 120`;
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:base="https://www.daily-bangladesh.com/" version="2.0">
            <channel>
                <title>
                    <![CDATA[ ডেইলি বাংলাদেশ ]]>
                </title>
                <description>
                    <![CDATA[ Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'. ]]>
                </description>
                <link>https://www.daily-bangladesh.com/</link>
                <image>
                    <url>https://www.daily-bangladesh.com/media/common/logo-fb.png</url>
                    <title>DailyBangladesh - RSS</title>
                    <link>https://www.daily-bangladesh.com/</link>
                </image>
                <generator>RSS by DailyBangladesh</generator>
                <lastBuildDate>${curdate}</lastBuildDate>
                <copyright>
                    <![CDATA[ Copyright: (C) ডেইলি বাংলাদেশ. ]]>
                </copyright>
                <language>
                    <![CDATA[ bn ]]>
                </language>
                <ttl>15</ttl>
                <atom:link href="https://www.daily-bangladesh.com/rss/rss.xml" rel="self" type="application/rss+xml"/>`;
            for (let i = 0; i < result.length; i++) {
                let date = '';
                if (result[i].fupdated_at && result[i].fupdated_at != '0000-00-00') {
                    date = result[i].updated_date;
                } else {
                    date = result[i].create_date;
                }

                xml += `<item>
                    <title>
                        <![CDATA[ ${result[i].ContentHeading} ]]>
                    </title>
                    <description>
                        <![CDATA[ ${result[i].ContentBrief} ]]>
                    </description>
                    <link>https://www.daily-bangladesh.com/${result[i].Slug}/${result[i].ContentID}</link>
                    <guid isPermaLink="true">https://www.daily-bangladesh.com/${result[i].Slug}/${result[i].ContentID}</guid>
                    <pubDate>${date}:00 +0600</pubDate>
                    <media:content medium="image" width="800" height="450" url="https://backoffice.daily-bangladesh.com/media/imgAll/${result[i].ImageBgPath}"/>
                </item>`

                if (i === result.length - 1) {
                    xml += `</channel>
                    </rss>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    });

    // axios
    //     .get('https://backoffice.daily-bangladesh.com/api/json/file/generateLatest.json')
    //     .then(res => {
    //         console.log(`statusCode: ${res.status}`);
    //         // console.log(res.data.data);
    //         if (res.data.data && res.data.data.length > 0) {
    //             let xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:base="https://www.daily-bangladesh.com/" version="2.0">
    //                 <channel>
    //                     <title>
    //                         <![CDATA[ ডেইলি বাংলাদেশ ]]>
    //                     </title>
    //                     <description>
    //                         <![CDATA[ Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'. ]]>
    //                     </description>
    //                     <link>https://www.daily-bangladesh.com/</link>
    //                     <image>
    //                         <url>https://backoffice.daily-bangladesh.com/media/common/logo-fb.png</url>
    //                         <title>DailyBangladesh - RSS</title>
    //                         <link>https://www.daily-bangladesh.com/</link>
    //                     </image>
    //                     <generator>RSS by DailyBangladesh</generator>
    //                     <lastBuildDate>${curdate}</lastBuildDate>
    //                     <copyright>
    //                         <![CDATA[ Copyright: (C) DailyBangladesh. ]]>
    //                     </copyright>
    //                     <language>
    //                         <![CDATA[ bn ]]>
    //                     </language>
    //                     <ttl>15</ttl>
    //                     <atom:link href="https://www.daily-bangladesh.com/rss/rss.xml" rel="self" type="application/rss+xml"/>`;
    //             for (let i = 0; i < res.data.data.length; i++) {
    //                 // let date = '';
    //                 // if (res.data.data[i].fupdated_at) {
    //                 //     date = res.data.data[i].fupdated_at;
    //                 // } else {
    //                 //     date = res.data.data[i].fcreated_at;
    //                 // }
    //                 xml += `<item>
    //                     <title>
    //                         <![CDATA[ ${res.data.data[i].ContentHeading} ]]>
    //                     </title>
    //                     <description>
    //                         <![CDATA[ ${res.data.data[i].ContentBrief} ]]>
    //                     </description>
    //                     <link>https://www.daily-bangladesh.com/${res.data.data[i].Slug}/${res.data.data[i].ContentID}</link>
    //                     <guid isPermaLink="true">https://www.daily-bangladesh.com/${res.data.data[i].Slug}/${res.data.data[i].ContentID}</guid>
    //                     <pubDate>${res.data.data[i].create_date}:00 +0600</pubDate>
    //                     <media:content medium="image" width="800" height="450" url="https://backoffice.daily-bangladesh.com/media/imgAll/${res.data.data[i].ImageBgPath}"/>
    //                 </item>`

    //                 if (i === res.data.data.length - 1) {
    //                     xml += `</channel>
    //                     </rss>`;
    //                     response.send(xml);
    //                 }
    //             }
    //         }
    //         else {
    //             response.send('');
    //         }
    //         // response.send(res.data.home_latest);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         response.send('');
    //     });
});

app.get('/rss/rssen.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('rssen.xml visited!');

    let date_ob = new Date();
    let weekdayname = ''
    let weekday = date_ob.getDay()
    if (weekday === 0) {
        weekdayname = 'Sun'
    } else if (weekday === 1) {
        weekdayname = 'Mon'
    } else if (weekday === 2) {
        weekdayname = 'Tue'
    } else if (weekday === 3) {
        weekdayname = 'Wed'
    } else if (weekday === 4) {
        weekdayname = 'Thu'
    } else if (weekday === 5) {
        weekdayname = 'Fri'
    } else if (weekday === 6) {
        weekdayname = 'Sat'
    }
    let day = date_ob.getDate()
    let monthname = ''
    let month = date_ob.getMonth()
    if (month === 0) {
        monthname = 'Jan'
    } else if (month === 1) {
        monthname = 'Feb'
    } else if (month === 2) {
        monthname = 'Mar'
    } else if (month === 3) {
        monthname = 'Apr'
    } else if (month === 4) {
        monthname = 'May'
    } else if (month === 5) {
        monthname = 'Jun'
    } else if (month === 6) {
        monthname = 'Jul'
    } else if (month === 7) {
        monthname = 'Aug'
    } else if (month === 8) {
        monthname = 'Sep'
    } else if (month === 9) {
        monthname = 'Oct'
    } else if (month === 10) {
        monthname = 'Nov'
    } else if (month === 11) {
        monthname = 'Dec'
    }
    let year = date_ob.getFullYear()
    let curdate = `${weekdayname}, ${day} ${monthname} ${year}`

    let sql = `SELECT en_contents.ContentID, en_contents.ContentHeading, en_contents.ContentBrief, en_contents.ImageBgPath, en_contents.URLAlies,DATE_FORMAT(en_contents.created_at, "%Y-%m-%d") as fcreated_at, DATE_FORMAT(en_contents.updated_at, "%Y-%m-%d") as fupdated_at, DATE_FORMAT(en_contents.created_at, '%W, %e %M %Y, %H:%i') as create_date, DATE_FORMAT(en_contents.updated_at, '%W, %e %M %Y, %H:%i') as updated_date, en_bas_categories.Slug FROM en_contents PARTITION(p1) INNER JOIN en_bas_categories ON en_contents.CategoryIDs=en_bas_categories.CategoryID WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 ORDER BY en_contents.ContentID DESC LIMIT 120`;
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:base="https://www.daily-bangladesh.com/" version="2.0">
            <channel>
                <title>
                    <![CDATA[ Daily Bangladesh ]]>
                </title>
                <description>
                    <![CDATA[ Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'. ]]>
                </description>
                <link>https://www.daily-bangladesh.com/</link>
                <image>
                    <url>https://www.daily-bangladesh.com/media/common/logoEn-fb.png</url>
                    <title>DailyBangladesh - RSS</title>
                    <link>https://www.daily-bangladesh.com/</link>
                </image>
                <generator>RSS by DailyBangladesh</generator>
                <lastBuildDate>${curdate}</lastBuildDate>
                <copyright>
                    <![CDATA[ Copyright: (C) Daily Bangladesh. ]]>
                </copyright>
                <language>
                    <![CDATA[ en ]]>
                </language>
                <ttl>15</ttl>
                <atom:link href="https://www.daily-bangladesh.com/rss/rssen.xml" rel="self" type="application/rss+xml"/>`;
            for (let i = 0; i < result.length; i++) {
                let date = '';
                if (result[i].fupdated_at && result[i].fupdated_at != '0000-00-00') {
                    date = result[i].updated_date;
                } else {
                    date = result[i].create_date;
                }

                xml += `<item>
                    <title>
                        <![CDATA[ ${result[i].ContentHeading} ]]>
                    </title>
                    <description>
                        <![CDATA[ ${result[i].ContentBrief} ]]>
                    </description>
                    <link>https://www.daily-bangladesh.com/english/${result[i].Slug}/${result[i].ContentID}</link>
                    <guid isPermaLink="true">https://www.daily-bangladesh.com/english/${result[i].Slug}/${result[i].ContentID}</guid>
                    <pubDate>${date}:00 +0600</pubDate>
                    <media:content medium="image" width="800" height="450" url="https://backoffice.daily-bangladesh.com/media/imgAll/${result[i].ImageBgPath}"/>
                </item>`

                if (i === result.length - 1) {
                    xml += `</channel>
                    </rss>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    });

    // axios
    //     .get('https://backoffice.daily-bangladesh.com/api-en/json/file/generateLatest.json')
    //     .then(res => {
    //         console.log(`statusCode: ${res.status}`);
    //         // console.log(res.data.data);
    //         if (res.data.data && res.data.data.length > 0) {
    //             let xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:base="https://www.daily-bangladesh.com/english/" version="2.0">
    //                 <channel>
    //                     <title>
    //                         <![CDATA[ Daily Bangladesh ]]>
    //                     </title>
    //                     <description>
    //                         <![CDATA[ Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'. ]]>
    //                     </description>
    //                     <link>https://www.daily-bangladesh.com/</link>
    //                     <image>
    //                         <url>https://backoffice.daily-bangladesh.com/media/common/logo-fb.png</url>
    //                         <title>DailyBangladesh - RSS</title>
    //                         <link>https://www.daily-bangladesh.com/</link>
    //                     </image>
    //                     <generator>RSS by DailyBangladesh</generator>
    //                     <lastBuildDate>${curdate}</lastBuildDate>
    //                     <copyright>
    //                         <![CDATA[ Copyright: (C) DailyBangladesh. ]]>
    //                     </copyright>
    //                     <language>
    //                         <![CDATA[ en ]]>
    //                     </language>
    //                     <ttl>15</ttl>
    //                     <atom:link href="https://www.daily-bangladesh.com/rss/rss.xml" rel="self" type="application/rss+xml"/>`;
    //             for (let i = 0; i < res.data.data.length; i++) {
    //                 // let date = '';
    //                 // if (res.data.data[i].fupdated_at) {
    //                 //     date = res.data.data[i].fupdated_at;
    //                 // } else {
    //                 //     date = res.data.data[i].fcreated_at;
    //                 // }
    //                 xml += `<item>
    //                     <title>
    //                         <![CDATA[ ${res.data.data[i].ContentHeading} ]]>
    //                     </title>
    //                     <description>
    //                         <![CDATA[ ${res.data.data[i].ContentBrief} ]]>
    //                     </description>
    //                     <link>https://www.daily-bangladesh.com/${res.data.data[i].Slug}/${res.data.data[i].ContentID}</link>
    //                     <guid isPermaLink="true">https://www.daily-bangladesh.com/${res.data.data[i].Slug}/${res.data.data[i].ContentID}</guid>
    //                     <pubDate>${res.data.data[i].create_date}:00 +0600</pubDate>
    //                     <media:content medium="image" width="800" height="450" url="https://backoffice.daily-bangladesh.com/media/imgAll/${res.data.data[i].ImageBgPath}"/>
    //                 </item>`

    //                 if (i === res.data.data.length - 1) {
    //                     xml += `</channel>
    //                     </rss>`;
    //                     response.send(xml);
    //                 }
    //             }
    //         }
    //         else {
    //             response.send('');
    //         }
    //         // response.send(res.data.home_latest);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         response.send('');
    //     });
});

app.get('/rss/rssvideo.xml', function (request, response) {
    response.setHeader('Content-Type', 'application/xml');
    console.log('rssvideo.xml visited!');

    let date_ob = new Date();
    let weekdayname = ''
    let weekday = date_ob.getDay()
    if (weekday === 0) {
        weekdayname = 'Sun'
    } else if (weekday === 1) {
        weekdayname = 'Mon'
    } else if (weekday === 2) {
        weekdayname = 'Tue'
    } else if (weekday === 3) {
        weekdayname = 'Wed'
    } else if (weekday === 4) {
        weekdayname = 'Thu'
    } else if (weekday === 5) {
        weekdayname = 'Fri'
    } else if (weekday === 6) {
        weekdayname = 'Sat'
    }
    let day = date_ob.getDate()
    let monthname = ''
    let month = date_ob.getMonth()
    if (month === 0) {
        monthname = 'Jan'
    } else if (month === 1) {
        monthname = 'Feb'
    } else if (month === 2) {
        monthname = 'Mar'
    } else if (month === 3) {
        monthname = 'Apr'
    } else if (month === 4) {
        monthname = 'May'
    } else if (month === 5) {
        monthname = 'Jun'
    } else if (month === 6) {
        monthname = 'Jul'
    } else if (month === 7) {
        monthname = 'Aug'
    } else if (month === 8) {
        monthname = 'Sep'
    } else if (month === 9) {
        monthname = 'Oct'
    } else if (month === 10) {
        monthname = 'Nov'
    } else if (month === 11) {
        monthname = 'Dec'
    }
    let year = date_ob.getFullYear()
    let curdate = `${weekdayname}, ${day} ${monthname} ${year}`

    let sql = `SELECT WebTVID, WebTVHeading, WebTVLinkCode, SourceType, Remarks, created_at, updated_at FROM tv_webtvs WHERE Deletable=1 ORDER BY WebTVID DESC LIMIT 120`;
    dbConnMedia.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let xml = `<?xml version="1.0" encoding="UTF-8"?>
            <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dcterms="http://purl.org/dc/terms/">
            <channel>
            <title><![CDATA[ ডেইলি বাংলাদেশ ]]></title>
            <link>https://www.daily-bangladesh.com/</link>
            <description>Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.</description>
            <image>
                <url>https://www.daily-bangladesh.com/media/common/logo-fb.png</url>
                <title>DailyBangladesh - Video Gallery - RSS</title>
                <link>https://www.daily-bangladesh.com/</link>
            </image>
            <generator>RSS by DailyBangladesh</generator>
            <lastBuildDate>${curdate}</lastBuildDate>
            <copyright>
                <![CDATA[ Copyright: (C) ডেইলি বাংলাদেশ. ]]>
            </copyright>
            <language>
                <![CDATA[ bn ]]>
            </language>
            <ttl>15</ttl>
            <atom:link href="https://www.daily-bangladesh.com/rss/rssvideo.xml" rel="self" type="application/rss+xml"/>`;
            for (let i = 0; i < result.length; i++) {
                let date = '';
                if (result[i].updated_at && result[i].updated_at != '0000-00-00 00:00:00') {
                    date = result[i].updated_date;
                } else {
                    date = result[i].create_date;
                }

                xml += `<item xmlns:media="http://search.yahoo.com/mrss/" xmlns:dcterms="http://purl.org/dc/terms/">
                    <link>https://www.daily-bangladesh.com/video/show/${result[i].WebTVID}</link>
                    <media:content medium="video" isDefault="true">
                        <media:player url="${result[i].SourceType == 1 ? "https://www.youtube.com/embed/" + result[i].WebTVLinkCode + "?autoplay=1" : result[i].SourceType == 2 ? "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F" + result[i].WebTVLinkCode + "%2F&show_text=0&width=560" : result[i].SourceType == 3 ? "https://player.vimeo.com/video/" + result[i].WebTVLinkCode : ''}" />
                        <media:title>${result[i].WebTVHeading}</media:title>
                        <media:description>${result[i].Remarks ? result[i].Remarks : result[i].WebTVHeading}</media:description>
                        <media:thumbnail url="https://img.youtube.com/vi/${result[i].WebTVLinkCode}/0.jpg" height="360" width="480"/>
                    </media:content>
                    <media:restriction relationship="allow" type="country">us ca</media:restriction>
                    <dcterms:valid xmlns:dcterms="http://purl.org/dc/terms/">start=${date}; scheme=W3C-DTF</dcterms:valid>
                </item>`

                if (i === result.length - 1) {
                    xml += `</channel>
                    </rss>`;
                    response.send(xml);
                }
            }
        }
        else {
            response.send('');
        }
    });
});


app.get('/:catSlug', function (request, response) {
    let catSlug = request.params.catSlug;
    console.log('Category page visited!' + catSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT CategoryName FROM bn_bas_categories WHERE Slug='${catSlug}'`;
    // console.log(sql);
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].CategoryName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `${title}`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/all_tags', function (request, response) {
    console.log('english all_tags visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'All Tags');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper");
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/english/all_writers', function (request, response) {
    console.log('english all_writers visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'All Writers');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper");
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/english/archives', function (request, response) {
    console.log('english archive visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'Archives');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper");
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/sub/:subCatSlug', function (request, response) {
    let subCatSlug = request.params.subCatSlug;
    console.log('sub Category page visited!' + subCatSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT CategoryName FROM bn_bas_categories WHERE Slug='${subCatSlug}' AND ParentID!=0`;
    // console.log(sql);
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].CategoryName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/divisions/:divisionSlug', function (request, response) {
    let divisionSlug = request.params.divisionSlug;
    console.log('Division page visited!' + divisionSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT DivisionNameBn FROM bas_divisions WHERE DivisionSlug='${divisionSlug}'`;
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let title = result[0].DivisionNameBn;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/writers/:WriterSlug', function (request, response) {
    let WriterSlug = request.params.WriterSlug;
    console.log('Writers page visited!' + WriterSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT WriterName FROM bn_writers WHERE Slug='${WriterSlug}'`;
    // console.log(sql);
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].WriterName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/tags/:TagTitle', function (request, response) {
    let TagTitle = request.params.TagTitle;
    console.log('Tags page visited!' + TagTitle);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT TagName FROM bn_tags WHERE TagName='${TagTitle}'`;
    // console.log(sql);
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].TagName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/search/:searchSlug', function (request, response) {
    console.log('Search page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'খুজুন');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "ডেইলি বাংলাদেশ,অনলাইন, পত্রিকা, বাংলাদেশ, আজকের পত্রিকা, জাতীয়, সারাদেশ, বরিশাল, চট্টগ্রাম, ঢাকা,খুলনা, রাজশাহী, সিলেট, রংপুর, ময়মনসিংহ, রাজধানী, আন্তর্জাতিক, রাজনীতি, বিনোদন , দেশি, বিদেশি, খেলা, ক্রিকেট, বিশ্বকাপ ক্রিকেট, বিশেষ কলাম, অর্থনীতি, ধর্ম, লাইফস্টাইল, ফ্যাশন, রেসিপি, সাত রঙ, সাতরঙ,  দূরবীন, প্রথম প্রহর, বইমেলা, তথ্যপ্রযুক্তি, শিক্ষাঙ্গন, আইন-আদালত, আইন আদালত, শিল্প ও সাহিত্, শিল্প সাহিত্, স্বাস্থ্য ও চিকিৎসা, স্বাস্থ্য চিকিৎসা, ফিচার, বিজ্ঞান, ভ্রমণ, মুক্তকথা, মুখোমুখি, প্রবাস জীবন, জব কর্নার, জব, মজার খবর, কার্টুন, সোশ্যাল মিডিয়া, সাইবার স্পেস, আর্কাইভ, সাহিত্য, কম্পিউটার, মোবাইল ফোন, গেমস, সরকার, অপরাধ, আইন ও বিচার, পরিবেশ, দুর্ঘটনা, সংসদ, রাজধানী, শেয়ার বাজার, বাণিজ্য, পোশাক শিল্প, ফুটবল, সকাল, বিকাল");
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/english/:catSlugEn', function (request, response) {
    let catSlugEn = request.params.catSlugEn;
    console.log('english Category page visited!' + catSlugEn);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT CategoryName FROM en_bas_categories WHERE Slug='${catSlugEn}'`;
    // console.log(sql);
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].CategoryName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/:catSlug/:id', function (request, response) {
    let catSlug = request.params.catSlug;
    let id = request.params.id;
    console.log('Detail page visited!' + catSlug + ' ' + id);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let partitionQRY = "";
    if (id >= 300000) {
        partitionQRY = ' PARTITION(p6) ';
    } else if (id >= 250000 && id < 300000) {
        partitionQRY = ' PARTITION(p5) ';
    } else if (id >= 200000 && id < 250000) {
        partitionQRY = ' PARTITION(p4) ';
    } else if (id >= 150000 && id < 200000) {
        partitionQRY = ' PARTITION(p3) ';
    } else if (id >= 100000 && id < 150000) {
        partitionQRY = ' PARTITION(p2) ';
    } else if (id >= 50000 && id < 100000) {
        partitionQRY = ' PARTITION(p1) ';
    } else if (id < 50000) {
        partitionQRY = ' PARTITION(p0) ';
    }

    let sql = `SELECT bn_contents.ContentHeading,bn_contents.ContentBrief,bn_contents.ImageBgPath,bn_contents.PlateType,bn_contents.ImagePlatePath,bn_contents.Keywords FROM bn_contents ${partitionQRY} WHERE bn_contents.Deletable=1 AND bn_contents.ShowContent=1 AND bn_contents.ContentID='${id}' LIMIT 1`;
    dbConn.query(sql, function (error, result) {
        // console.log(result)
        if (result && result.length > 0) {
            let title = result[0].ContentHeading;
            let description = result[0].ContentBrief;
            if (!description) {
                description = title
            } else {
                description = (result[0].ContentBrief).replace(/(<([^>]+)>)/ig, '')
            }
            let image = '';
            if (result[0].PlateType > 0) {
                image = result[0].ImagePlatePath;
            } else {
                image = result[0].ImageBgPath
            }
            let keyword = '';
            if (result[0].Keywords) {
                keyword = result[0].Keywords
            } else {
                keyword = title.split(" ");
                keyword = keyword.toString();
            }
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${description}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `${title}`);
                data = data.replace(/\$OG_IMAGE/g, `${BACK_END_URL}media/imgAll/${image}`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/sub/:subCatSlugEn', function (request, response) {
    let subCatSlugEn = request.params.subCatSlugEn;
    console.log('english sub Category page visited!' + subCatSlugEn);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT CategoryName FROM en_bas_categories WHERE Slug='${subCatSlugEn}' AND ParentID!=0`;
    // console.log(sql);
    console.log('hi');
    dbConnEn.query(sql, function (error, result) {
        console.log('result');
        console.log(result);
        if (result && result.length > 0) {
            console.log('result');
            let title = result[0].CategoryName;
            console.log('title = ' + title);
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/divisions/:divisionSlug', function (request, response) {
    let divisionSlug = request.params.divisionSlug;
    console.log('english Division page visited!' + divisionSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT DivisionName FROM bas_divisions WHERE DivisionSlug='${divisionSlug}'`;
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let title = result[0].DivisionName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/writers/:WriterSlug', function (request, response) {
    let WriterSlug = request.params.WriterSlug;
    console.log('english Writers page visited!' + WriterSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT WriterNameEn FROM en_writers WHERE Slug='${WriterSlug}'`;
    // console.log(sql);
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].WriterNameEn;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/tags/:TagTitle', function (request, response) {
    let TagTitle = request.params.TagTitle;
    console.log('english Tags page visited!' + TagTitle);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT TagName FROM en_tags WHERE TagName='${TagTitle}'`;
    // console.log(sql);
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            // console.log('result');
            let title = result[0].TagName;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/search/:searchSlug', function (request, response) {
    console.log('english Search page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
        data = data.replace(/\$OG_TITLE/g, 'Search');
        data = data.replace(/\$OG_DESCRIPTION/g, "Daily Bangladesh is an online news portal of Bangladesh. It was established in 2017 with the commitment to publish objective and information-based news. Our slogan is 'Sky is our dream'.");
        data = data.replace(/\$OG_KEYWORDS/g, "daily bangladesh, bangla news, current news, bangla newspaper, bangladesh ewspaper, online paper, bangladeshi newspaper, bangla news paper, bangladesh ewspapers, newspaper, all bangla news paper, bd news paper, news paper, bangladesh news paper, daily, bangla newspaper, daily news paper, bangladeshi news paper, bangla paper,bijoy to unicode,online bijoy unicode converter, bangla web tools,bangla converter, bijoy to Unicode, unicode to bijoy,all bangla newspaper, bangladesh news, daily newspaper");
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
        // var fullUrl = request.protocol + '://' + request.hostname + request.originalUrl;
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

app.get('/divisions/:divisionSlug/:districtSlug', function (request, response) {
    let divisionSlug = request.params.divisionSlug;
    let districtSlug = request.params.districtSlug;
    console.log('District page visited!' + divisionSlug + ' ' + districtSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT bas_districts.DistrictNameBN FROM bas_districts WHERE bas_districts.DistrictSlug='${districtSlug}'`;
    dbConn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let title = result[0].DistrictNameBN;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            // console.log(result[0])
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/:catSlugEn/:idEn', function (request, response) {
    let catSlugEn = request.params.catSlugEn;
    let idEn = request.params.idEn;
    console.log('english Detail page visited!' + catSlugEn + ' ' + idEn);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let partitionQRY = "";
    if (idEn >= 50000) {
        partitionQRY = ' PARTITION(p1) ';
    } else if (idEn < 50000) {
        partitionQRY = ' PARTITION(p0) ';
    }

    let sql = `SELECT en_contents.ContentHeading,en_contents.ContentBrief,en_contents.ImageBgPath,en_contents.PlateType,en_contents.ImagePlatePath,en_contents.Keywords FROM en_contents ${partitionQRY} WHERE en_contents.Deletable=1 AND en_contents.ShowContent=1 AND en_contents.ContentID='${idEn}' LIMIT 1`;
    dbConnEn.query(sql, function (error, result) {
        // console.log(result)
        if (result && result.length > 0) {
            let title = result[0].ContentHeading;
            let description = result[0].ContentBrief;
            if (!description) {
                description = title
            } else {
                description = (result[0].ContentBrief).replace(/(<([^>]+)>)/ig, '')
            }
            let image = '';
            if (result[0].PlateType > 0) {
                image = result[0].ImagePlatePath;
            } else {
                image = result[0].ImageBgPath
            }
            let keyword = '';
            if (result[0].Keywords) {
                keyword = result[0].Keywords
            } else {
                keyword = title.split(" ");
                keyword = keyword.toString();
            }
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${description}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `${title}`);
                data = data.replace(/\$OG_IMAGE/g, `${BACK_END_URL}media/imgAll/${image}`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/video/show/:vid', function (request, response) {
    let vid = request.params.vid;
    console.log('video details page visited!' + vid);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT WebTVHeading, WebTVLinkCode FROM tv_webtvs WHERE WebTVID='${vid}' LIMIT 1`;
    dbConnMedia.query(sql, function (error, result) {
        // console.log(result)
        if (result && result.length > 0) {
            let title = result[0].WebTVHeading;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            let description = result[0].WebTVHeading;
            let image = result[0].WebTVLinkCode;
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${description}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `${title}`);
                data = data.replace(/\$OG_IMAGE/g, `https://img.youtube.com/vi/${image}/0.jpg`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});

app.get('/english/divisions/:divisionSlug/:districtSlug', function (request, response) {
    let divisionSlug = request.params.divisionSlug;
    let districtSlug = request.params.districtSlug;
    console.log('english District page visited!' + divisionSlug + ' ' + districtSlug);
    const filePath = path.resolve(__dirname, './build', 'index.html');

    let sql = `SELECT bas_districts.DistrictNameBN FROM bas_districts WHERE bas_districts.DistrictSlug='${districtSlug}'`;
    dbConnEn.query(sql, function (error, result) {
        if (result && result.length > 0) {
            let title = result[0].DistrictNameBN;
            let keyword = title.split(" ");
            keyword = keyword.toString();
            // console.log(result[0])
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'index, follow');
                data = data.replace(/\$OG_TITLE/g, `${title}`);
                data = data.replace(/\$OG_DESCRIPTION/g, `${title}`);
                data = data.replace(/\$OG_KEYWORDS/g, `${keyword}`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
                data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
                data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
                data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
                data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logoEn-fb.png`);
                var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + (request.originalUrl).replace(/\/+$/, '');
                data = data.replace(/\$OG_URL/g, `${fullUrl}`);
                response.send(data);
            });
        }
    })
});












app.use(express.static(path.resolve(__dirname, './build')));


app.get('*', function (request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    // response.sendFile(filePath);

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_ROBOTS/g, 'noindex, nofollow');
        data = data.replace(/\$OG_TITLE/g, `404 - Nothing Found`);
        data = data.replace(/\$OG_DESCRIPTION/g, `404 - Nothing Found`);
        data = data.replace(/\$OG_KEYWORDS/g, `404, Nothing Found`);
        data = data.replace(/\$OG_IMAGE_ALT/g, `Daily Bangladesh English :: ডেইলি বাংলাদেশ`);
        data = data.replace(/\$OG_IMAGE/g, `${FONT_DOMAIN_URL}media/common/logo-fb.png`);
        var fullUrl = request.get('x-forwarded-proto') + '://' + request.get('X-Forwarded-Host') + request.originalUrl;
        data = data.replace(/\$OG_URL/g, `${fullUrl}`);
        response.send(data);
    });
});

httpServer.listen(3700, function () {
    console.log('Node app is running on port 3700');
});
// httpsServer.listen(3800, function () {
//     console.log('Node app is running on port 3800');
// });

module.exports = app;


