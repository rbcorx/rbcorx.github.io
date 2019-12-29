obj = {
    "clip":{
        "segments": [
                {
                    "from":1.03434,
                    "to":3.44545,
                    "sent": "++",
                    "sentscore": 0.8,
                    "speaker": "Salesman",
                    "tag": "product",
                    "summ": "Specializing in traveler path-to-purchase data for over a decade...",
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
                    "transcript": "Specializing in traveler path-to-purchase data for over a decade, Sojern is travel’s direct demand engine for thousands of brands—from global enterprises to boutique operators—across the hotel, airline, cruise, transportation, tourism industries and more.",

                },
                {
                    "from":4.4545,
                    "to":7.4545,
                    "sent": "--",
                    "sentscore": 0.1,
                    "speaker": "Client",
                    "tag": "sojern",
                    "summ": "there's no obligation and so was wondering if I can go ahead...",
                    "transcript": "and it's completely free there's no obligation and so was wondering if I can go ahead and set you up with that",
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
            "duration": 10,
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
/*
//obj = {"clip": {"stats": {"speak2listen": "61.6846229187%", "duration": 246.09, "interruptions": 11, "sentiment": "+", "avg-speech": 6.381250000000001, "pricing-talk": 6, "qask": 18, "timeline": 32, "words": 605, "compete": 0}, "sentiment": 0.2458510487528345, "segments": [{"to": 3.77, "summ": "how is this Indian", "tag": "indian", "from": 2.14, "concepts": [{"type": "Topic", "value": "indian"}, {"type": "Topic", "value": "phone number"}, {"type": "Topic", "value": "hesitation develop"}, {"type": "Topic", "value": "audit mean"}, {"type": "Topic", "value": "diana"}], "speaker": "Salesman", "transcript": "how is this Indian", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 6.65, "summ": "different band I guess", "tag": "band", "from": 5.37, "concepts": [{"type": "Topic", "value": "band"}, {"type": "Topic", "value": "different"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "different band I guess", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 7.66, "summ": "for massages", "tag": "be develop", "from": 6.89, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Salesman", "transcript": "for massages", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 14.95, "summ": "Indiana means Ruth I'm calling yeah I was only if you have a few minutes to speak to me in regards to your website", "tag": "regard", "from": 9.71, "concepts": [{"type": "Entity", "value": "Indiana, LOCATION"}, {"type": "Entity", "value": "Ruth, PERSON"}, {"type": "Topic", "value": "regard"}, {"type": "Topic", "value": "ruth"}, {"type": "Topic", "value": "minute"}, {"type": "Topic", "value": "website"}, {"type": "Topic", "value": "indiana"}, {"type": "Topic", "value": "mean ruth"}, {"type": "Topic", "value": "indiana mean"}, {"type": "Topic", "value": "be call"}, {"type": "Semantic Triplet", "value": "Indiana, means, Ruth"}, {"type": "Semantic Triplet", "value": "you, have, minutes"}], "speaker": "Salesman", "transcript": "Indiana means Ruth I'm calling yeah I was only if you have a few minutes to speak to me in regards to your website", "sentscore": -0.1, "sent": "-", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 17.86, "summ": "I'm sure", "tag": "be develop", "from": 16.76, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "I'm sure", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 26.48, "summ": "I'll be great and so I know that I saw your ad on welcome to the neighborhood and I was just wondering is that helping yo", "tag": "ad", "from": 18.27, "concepts": [{"type": "Topic", "value": "ad"}, {"type": "Topic", "value": "lot"}, {"type": "Topic", "value": "neighborhood"}, {"type": "Topic", "value": "welcome"}, {"type": "Topic", "value": "customer"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}, {"type": "Semantic Triplet", "value": "I, saw, ad"}], "speaker": "Salesman", "transcript": "I'll be great and so I know that I saw your ad on welcome to the neighborhood and I was just wondering is that helping you is that bringing in a lot of customers for you", "sentscore": 0.8, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 34.0, "summ": "well I hadn't done the apple welcome to the neighborhood and quite clear time", "tag": "clear", "from": 28.4, "concepts": [{"type": "Topic", "value": "clear"}, {"type": "Topic", "value": "welcome"}, {"type": "Topic", "value": "neighborhood"}, {"type": "Topic", "value": "apple"}, {"type": "Topic", "value": "time"}, {"type": "Topic", "value": "apple welcome"}, {"type": "Topic", "value": "schedule will"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "website audit"}, {"type": "Topic", "value": "audit mean"}, {"type": "Semantic Triplet", "value": "I, hadn't done, apple welcome"}, {"type": "Semantic Triplet", "value": "I, hadn't done, clear"}, {"type": "Semantic Triplet", "value": "I, hadn't done, time"}], "speaker": "Client", "transcript": "well I hadn't done the apple welcome to the neighborhood and quite clear time", "sentscore": 0.45, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 40.35, "summ": "or was it on the web their website", "tag": "website", "from": 38.29, "concepts": [{"type": "Topic", "value": "website"}, {"type": "Topic", "value": "web"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "or was it on the web their website", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 50.92, "summ": "was it just an example or", "tag": "be develop", "from": 48.85, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "was it just an example or", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 70.06, "summ": "I'm in the second actually look it up right now and see what it says %HESITATION is I mean has the phone number for a mas", "tag": "massage", "from": 51.84, "concepts": [{"type": "Topic", "value": "massage"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "mind"}, {"type": "Topic", "value": "phone"}, {"type": "Topic", "value": "total"}, {"type": "Topic", "value": "phone number"}, {"type": "Topic", "value": "hour massage"}, {"type": "Topic", "value": "massage therapy"}, {"type": "Topic", "value": "dollar special"}, {"type": "Topic", "value": "business information"}, {"type": "Semantic Triplet", "value": "it, says, it"}], "speaker": "Salesman", "transcript": "I'm in the second actually look it up right now and see what it says %HESITATION is I mean has the phone number for a massage therapy with you and then it says it's a ninety five dollar special for an hour massage in our facial or a one seventy five for total mind and body", "sentscore": 0.047193877551020405, "sent": "+", "KPIs": [{"type": "Timeline", "value": 7}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 2}, {"type": "Q/A", "value": 1}]}, {"to": 73.51, "summ": "where does have an expiration date", "tag": "date", "from": 71.1, "concepts": [{"type": "Topic", "value": "date"}, {"type": "Topic", "value": "expiration"}, {"type": "Topic", "value": "expiration date"}, {"type": "Topic", "value": "get diana"}, {"type": "Topic", "value": "imelda com"}, {"type": "Topic", "value": "indiana"}, {"type": "Topic", "value": "dot diana"}], "speaker": "Client", "transcript": "where does have an expiration date", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 79.83, "summ": "I am yeah it actually expires back in February so does have an expiration date", "tag": "expiration", "from": 74.48, "concepts": [{"type": "Topic", "value": "expiration"}, {"type": "Topic", "value": "date"}, {"type": "Topic", "value": "february"}, {"type": "Topic", "value": "expiration date"}, {"type": "Topic", "value": "get diana"}, {"type": "Topic", "value": "imelda com"}, {"type": "Topic", "value": "indiana"}, {"type": "Topic", "value": "dot diana"}, {"type": "Semantic Triplet", "value": "it, expires, so"}], "speaker": "Salesman", "transcript": "I am yeah it actually expires back in February so does have an expiration date", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 82.82, "summ": "okay sold more an example let me", "tag": "example let", "from": 80.54, "concepts": [{"type": "Topic", "value": "example let"}, {"type": "Topic", "value": "pm"}, {"type": "Topic", "value": "envy get"}, {"type": "Topic", "value": "anne imelda"}, {"type": "Topic", "value": "dollar special"}, {"type": "Semantic Triplet", "value": "example, let, me"}], "speaker": "Client", "transcript": "okay sold more an example let me", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 84.36, "summ": "with acne", "tag": "be develop", "from": 83.56, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "with acne", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 107.73, "summ": "well I was just wondering I am basically a work for web consulting company and we're actually giving away ten free websit", "tag": "website", "from": 85.22, "concepts": [{"type": "Topic", "value": "website"}, {"type": "Topic", "value": "free"}, {"type": "Topic", "value": "web"}, {"type": "Topic", "value": "consulting"}, {"type": "Topic", "value": "company"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "website audit"}, {"type": "Topic", "value": "audit mean"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "website ad"}, {"type": "Semantic Triplet", "value": "I, am, work"}, {"type": "Semantic Triplet", "value": "we, giving, website audits"}, {"type": "Semantic Triplet", "value": "I, can set, you"}, {"type": "Semantic Triplet", "value": "they, can help, bring"}, {"type": "Semantic Triplet", "value": "you, bring, customers"}, {"type": "Semantic Triplet", "value": "there, 's, obligation"}], "speaker": "Salesman", "transcript": "well I was just wondering I am basically a work for web consulting company and we're actually giving away ten free website audits meaning I can set you up with an appointment with one of our consultants and they cannot go over website ads or your own website and see how they can help you bring in more customers and it's completely free there's no obligation and so was wondering if I can go ahead and set you up with that", "sentscore": 0.31666666666666665, "sent": "+", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 2}, {"type": "Q/A", "value": 1}]}, {"to": 118.99, "summ": "well let gory %HESITATION were actually %HESITATION developing our website right now as we speak %HESITATION so that migh", "tag": "hesitation", "from": 109.02, "concepts": [{"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "website"}, {"type": "Topic", "value": "gory"}, {"type": "Topic", "value": "hesitation develop"}, {"type": "Topic", "value": "ruth"}, {"type": "Topic", "value": "z. diana"}, {"type": "Topic", "value": "envy get"}, {"type": "Topic", "value": "diana anne"}, {"type": "Semantic Triplet", "value": "%HESITATION, were, HESITATION"}, {"type": "Semantic Triplet", "value": "we, speak, %HESITATION"}], "speaker": "Client", "transcript": "well let gory %HESITATION were actually %HESITATION developing our website right now as we speak %HESITATION so that might be", "sentscore": -0.07142857142857144, "sent": "-", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 130.41, "summ": "yeah I can tell you look at it while you're developing a you know give you tips they do like web design and build us look", "tag": "web", "from": 119.13, "concepts": [{"type": "Topic", "value": "web"}, {"type": "Topic", "value": "design"}, {"type": "Topic", "value": "tip"}, {"type": "Topic", "value": "medium"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}, {"type": "Semantic Triplet", "value": "you, 're developing, give"}, {"type": "Semantic Triplet", "value": "they, can help, you"}], "speaker": "Salesman", "transcript": "yeah I can tell you look at it while you're developing a you know give you tips they do like web design and build us look at all over everything that you have online all your media and see how they can help you", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 133.75, "summ": "okay any further can create special", "tag": "be develop", "from": 131.51, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "okay any further can create special", "sentscore": 0.28571428571428575, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 0}]}, {"to": 136.37, "summ": "yeah we're giving away ten free sessions currently", "tag": "session", "from": 134.1, "concepts": [{"type": "Topic", "value": "session"}, {"type": "Topic", "value": "free"}, {"type": "Topic", "value": "be give"}, {"type": "Topic", "value": "business information"}, {"type": "Topic", "value": "be look"}, {"type": "Topic", "value": "business partner"}, {"type": "Topic", "value": "hour massage"}, {"type": "Semantic Triplet", "value": "we, 're giving, sessions"}], "speaker": "Salesman", "transcript": "yeah we're giving away ten free sessions currently", "sentscore": 0.13333333333333333, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 0}]}, {"to": 142.3, "summ": "okay and then what does that in title", "tag": "okay", "from": 137.73, "concepts": [{"type": "Topic", "value": "okay"}, {"type": "Topic", "value": "title"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "okay and then what does that in title", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 163.66, "summ": "basically what I'm gonna do it if you're willing today is the go ahead and put you in an appointment with our books whene", "tag": "today", "from": 142.72, "concepts": [{"type": "Topic", "value": "today"}, {"type": "Topic", "value": "convenient"}, {"type": "Topic", "value": "consultant"}, {"type": "Topic", "value": "phone"}, {"type": "Topic", "value": "book"}, {"type": "Topic", "value": "be gon"}, {"type": "Topic", "value": "mem"}, {"type": "Topic", "value": "z. diana"}, {"type": "Topic", "value": "mem z."}, {"type": "Topic", "value": "web consulting"}, {"type": "Semantic Triplet", "value": "what, 'm gon, na do"}, {"type": "Semantic Triplet", "value": "one, will give, you"}, {"type": "Semantic Triplet", "value": "one, will give, call"}, {"type": "Semantic Triplet", "value": "that, 's, all"}, {"type": "Semantic Triplet", "value": "you, want, to proceed"}, {"type": "Semantic Triplet", "value": "you, want, see"}], "speaker": "Salesman", "transcript": "basically what I'm gonna do it if you're willing today is the go ahead and put you in an appointment with our books whenever you're convenient for you one of our consultants will give you a call it will just be over the phone on the look at everything that you have and that's all that entails as of today and then if you want to proceed later on or see what other services we have they can go over that with you", "sentscore": 0.041666666666666664, "sent": "+", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 3}]}, {"to": 179.23, "summ": "opiate what me and go ahead and gab but if you could actually emailing me your %HESITATION your business information beca", "tag": "business", "from": 164.69, "concepts": [{"type": "Topic", "value": "business"}, {"type": "Topic", "value": "aware"}, {"type": "Topic", "value": "gab"}, {"type": "Topic", "value": "sure"}, {"type": "Topic", "value": "partner"}, {"type": "Topic", "value": "business information"}, {"type": "Topic", "value": "business partner"}, {"type": "Topic", "value": "be look"}, {"type": "Topic", "value": "phone number"}, {"type": "Topic", "value": "hour massage"}, {"type": "Semantic Triplet", "value": "you, emailing, me"}, {"type": "Semantic Triplet", "value": "%, HESITATION, business information"}, {"type": "Semantic Triplet", "value": "I, have, business partners"}], "speaker": "Client", "transcript": "opiate what me and go ahead and gab but if you could actually emailing me your %HESITATION your business information because I have two other business partners that's like sure that they're aware that the sharing that I'm looking into", "sentscore": 0.15625, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 185.25, "summ": "sounds great and I was just wondering when do you think would be convenient for you", "tag": "convenient", "from": 179.67, "concepts": [{"type": "Topic", "value": "convenient"}, {"type": "Topic", "value": "great"}, {"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}, {"type": "Semantic Triplet", "value": "I, wondering, when"}], "speaker": "Salesman", "transcript": "sounds great and I was just wondering when do you think would be convenient for you", "sentscore": 0.8, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 205.4, "summ": "are initially when I look at my schedule won't think it deftly I could talk and when they twenty seconds I have a one o'c", "tag": "second", "from": 186.02, "concepts": [{"type": "Topic", "value": "second"}, {"type": "Topic", "value": "o'clock"}, {"type": "Topic", "value": "available"}, {"type": "Topic", "value": "schedule"}, {"type": "Topic", "value": "schedule will"}, {"type": "Topic", "value": "apple welcome"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "website audit"}, {"type": "Topic", "value": "audit mean"}, {"type": "Semantic Triplet", "value": "I, have, o'clock"}], "speaker": "Client", "transcript": "are initially when I look at my schedule won't think it deftly I could talk and when they twenty seconds I have a one o'clock available", "sentscore": 0.3333333333333333, "sent": "+", "KPIs": [{"type": "Timeline", "value": 5}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 216.14, "summ": "perfect I'll put you down Wednesday twenty second for one PM and I'll actually I am how myself or someone else send you a", "tag": "emailing", "from": 205.62, "concepts": [{"type": "Topic", "value": "emailing"}, {"type": "Topic", "value": "wednesday"}, {"type": "Topic", "value": "second"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "pm"}, {"type": "Topic", "value": "example let"}, {"type": "Topic", "value": "envy get"}, {"type": "Topic", "value": "anne imelda"}, {"type": "Topic", "value": "dollar special"}, {"type": "Semantic Triplet", "value": "I, 'll put, you"}, {"type": "Semantic Triplet", "value": "someone, send, you"}, {"type": "Semantic Triplet", "value": "I, get, emailing"}], "speaker": "Salesman", "transcript": "perfect I'll put you down Wednesday twenty second for one PM and I'll actually I am how myself or someone else send you an email if I can just get your emailing from racial", "sentscore": 0.2111111111111111, "sent": "+", "KPIs": [{"type": "Timeline", "value": 4}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 222.78, "summ": "okay incremental any envy got Diana Anne Imelda com", "tag": "envy", "from": 217.03, "concepts": [{"type": "Entity", "value": "Diana Anne Imelda, PERSON"}, {"type": "Entity", "value": "Diana, PERSON"}, {"type": "Topic", "value": "envy"}, {"type": "Topic", "value": "imelda"}, {"type": "Topic", "value": "diana"}, {"type": "Topic", "value": "anne"}, {"type": "Topic", "value": "incremental"}, {"type": "Topic", "value": "imelda com"}, {"type": "Topic", "value": "envy get"}, {"type": "Topic", "value": "get diana"}, {"type": "Topic", "value": "diana anne"}, {"type": "Topic", "value": "diana anne imelda"}, {"type": "Semantic Triplet", "value": "envy, got, Diana Anne Imelda com"}], "speaker": "Client", "transcript": "okay incremental any envy got Diana Anne Imelda com", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 227.51, "summ": "okay MEM Z. Diana I genome", "tag": "mem", "from": 223.04, "concepts": [{"type": "Entity", "value": "Z. Diana, PERSON"}, {"type": "Entity", "value": "Diana, PERSON"}, {"type": "Topic", "value": "mem"}, {"type": "Topic", "value": "z."}, {"type": "Topic", "value": "diana"}, {"type": "Topic", "value": "okay"}, {"type": "Topic", "value": "z. diana"}, {"type": "Topic", "value": "mem z."}, {"type": "Topic", "value": "be gon"}, {"type": "Topic", "value": "web consulting"}], "speaker": "Salesman", "transcript": "okay MEM Z. Diana I genome", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 229.06, "summ": "dot Diana", "tag": "diana", "from": 227.76, "concepts": [{"type": "Entity", "value": "Diana, PERSON"}, {"type": "Topic", "value": "diana"}, {"type": "Topic", "value": "dot"}, {"type": "Topic", "value": "dot diana"}, {"type": "Topic", "value": "mean ruth"}, {"type": "Topic", "value": "indian"}, {"type": "Topic", "value": "apple welcome"}], "speaker": "Client", "transcript": "dot Diana", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 237.73, "summ": "okay sorry about that begins to obtain what will send you all our business information in a confirmation for your appoint", "tag": "confirmation", "from": 229.4, "concepts": [{"type": "Topic", "value": "confirmation"}, {"type": "Topic", "value": "business"}, {"type": "Topic", "value": "information"}, {"type": "Topic", "value": "sorry"}, {"type": "Topic", "value": "appointment"}, {"type": "Topic", "value": "business information"}, {"type": "Topic", "value": "business partner"}, {"type": "Topic", "value": "be look"}, {"type": "Topic", "value": "phone number"}, {"type": "Topic", "value": "hour massage"}, {"type": "Semantic Triplet", "value": "that, begins, to obtain"}, {"type": "Semantic Triplet", "value": "what, will send, you"}, {"type": "Semantic Triplet", "value": "what, will send, business information"}], "speaker": "Salesman", "transcript": "okay sorry about that begins to obtain what will send you all our business information in a confirmation for your appointment", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 240.72, "summ": "okay that sounds great what is your name again", "tag": "be develop", "from": 238.67, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "okay that sounds great what is your name again", "sentscore": 0.65, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 241.52, "summ": "my name is Rick", "tag": "rick", "from": 240.88, "concepts": [{"type": "Entity", "value": "Rick, PERSON"}, {"type": "Topic", "value": "rick"}, {"type": "Topic", "value": "diana"}, {"type": "Topic", "value": "mean ruth"}, {"type": "Topic", "value": "expiration date"}, {"type": "Topic", "value": "indian"}, {"type": "Semantic Triplet", "value": "name, is, Rick"}], "speaker": "Salesman", "transcript": "my name is Rick", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 246.09, "summ": "okay habiting", "tag": "be develop", "from": 245.25, "concepts": [{"type": "Topic", "value": "be develop"}, {"type": "Topic", "value": "web design"}, {"type": "Topic", "value": "consulting company"}, {"type": "Topic", "value": "web consulting"}, {"type": "Topic", "value": "audit mean"}], "speaker": "Client", "transcript": "okay habiting", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}], "summary": "I'm in the second actually look it up right now and see what it says %HESITATION is I mean has the phone number for a massage therapy with you and then it says it's a ninety five dollar special for an hour massage in our facial or a one seventy five for total mind and body.", "topic": [{"y": 23, "name": "Product"}, {"y": 37, "name": "Price"}, {"y": 10, "name": "Competitor"}, {"y": 40, "name": "Company"}], "keywords": [["Indiana", "Ruth", "Diana Anne Imelda", "Z. Diana", "Diana", "Rick", "business information", "business partner", "be look", "phone number", "hour massage", "massage therapy", "dollar special", "example let", "imelda com", "dot diana", "apple welcome", "schedule will", "consulting company", "website audit", "audit mean", "web consulting", "website ad", "business information", "example let", "mem z.", "be gon", "mem", "z. diana", "mem z.", "web consulting", "get diana", "business partner", "be look", "mean ruth", "rick", "website", "diana", "massage", "second", "web", "free", "great", "appointment", "hesitation", "business"], [13, 11, 15, 11, 13, 13, 8, 10, 8, 9, 7, 8, 5, 7, 5, 7, 6, 7, 5, 9, 8, 6, 8, 5, 10, 5, 6, 6, 8, 10, 6, 9, 8, 8, 6, 7, 0, 2, 5, 0, 0, 5, 4, 2, 4, 4]], "keywords_trank": [["website", 0.03413813796035757], ["diana", 0.02622084741155212], ["massage", 0.0261468813246575], ["second", 0.023497993388365685], ["web", 0.023074156197424835], ["free", 0.02252587233264161], ["great", 0.0222317086816277], ["appointment", 0.02179855833792165], ["hesitation", 0.021163811626528514], ["business", 0.017077855217638046]], "keywords_lda": ["business information", "business partner", "be look", "phone number", "hour massage", "massage therapy", "dollar special", "example let", "imelda com", "dot diana", "apple welcome", "schedule will", "consulting company", "website audit", "audit mean", "web consulting", "website ad", "business information", "example let", "mem z.", "be gon", "mem", "z. diana", "mem z.", "web consulting", "get diana", "business partner", "be look", "mean ruth", "rick"], "NER": [["Indiana", "LOCATION"], ["Ruth", "PERSON"], ["Diana Anne Imelda", "PERSON"], ["Z. Diana", "PERSON"], ["Diana", "PERSON"], ["Rick", "PERSON"]]}};

//obj = {"clip": {"stats": {"speak2listen": "84.1392305146%", "duration": 479.3, "interruptions": 17, "sentiment": "+", "avg-speech": 6.233809523809523, "pricing-talk": 4, "qask": 25, "timeline": 32, "words": 1220, "compete": 1}, "sentiment": 0.2030873248615184, "segments": [{"to": 25.07, "summ": "yeah n't how hello hi I am looking for Michelle and their care", "tag": "michelle", "from": 1.77, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "care"}, {"type": "Topic", "value": "locker obtain"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "be go"}, {"type": "Topic", "value": "hesitation dog"}], "speaker": "Client", "transcript": "yeah n't how hello hi I am looking for Michelle and their care", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 34.42, "summ": "hi Michelle maintenance tasks and I'm calling on behalf of where did dot com I tell you at Craigslist and you mentioned y", "tag": "maintenance", "from": 25.65, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Craigslist, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "maintenance"}, {"type": "Topic", "value": "pitch"}, {"type": "Topic", "value": "perfect"}, {"type": "Topic", "value": "task"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "craigslist"}, {"type": "Topic", "value": "maintenance task"}, {"type": "Topic", "value": "michelle maintenance"}, {"type": "Topic", "value": "provide service"}, {"type": "Topic", "value": "be call"}, {"type": "Semantic Triplet", "value": "I, tell, you"}, {"type": "Semantic Triplet", "value": "you, provide, services"}], "speaker": "Salesman", "transcript": "hi Michelle maintenance tasks and I'm calling on behalf of where did dot com I tell you at Craigslist and you mentioned you provide services perfect pitch correct", "sentscore": 1.0, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 36.35, "summ": "my doctor has", "tag": "michelle -PRON-", "from": 35.47, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "my doctor has", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 53.62, "summ": "yeah well the reason why I'm calling is because we have a network of customers in Vancouver who were interested in having", "tag": "customer", "from": 36.82, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Vancouver, LOCATION"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "customer"}, {"type": "Topic", "value": "cost"}, {"type": "Topic", "value": "network"}, {"type": "Topic", "value": "area"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "vancouver"}, {"type": "Topic", "value": "customer look"}, {"type": "Topic", "value": "be call"}, {"type": "Semantic Triplet", "value": "we, have, network"}, {"type": "Semantic Triplet", "value": "we, saw, ad"}, {"type": "Semantic Triplet", "value": "we, know, business"}, {"type": "Semantic Triplet", "value": "you, like, to connect"}, {"type": "Semantic Triplet", "value": "this, is going, to be"}], "speaker": "Salesman", "transcript": "yeah well the reason why I'm calling is because we have a network of customers in Vancouver who were interested in having their services on so we saw your ad and we know your business to help other customers looking for a dog in house sitters would you like to connect with our customers we have in your area this is going to be at no cost to you Michelle", "sentscore": 0.0625, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 2}]}, {"to": 83.76, "summ": "of thinking that this is very simple %HESITATION excitedly you signing up for free on our website triple double you got g", "tag": "email", "from": 56.76, "concepts": [{"type": "Entity", "value": "Glenn, PERSON"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "request"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "simple"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "service request"}, {"type": "Topic", "value": "content glenn"}, {"type": "Topic", "value": "get grab"}, {"type": "Topic", "value": "grab dot"}, {"type": "Topic", "value": "start receive"}, {"type": "Semantic Triplet", "value": "this, is, %HESITATION"}, {"type": "Semantic Triplet", "value": "you, signing, double"}, {"type": "Semantic Triplet", "value": "you, got, grabbing"}, {"type": "Semantic Triplet", "value": "you, allow, me"}, {"type": "Semantic Triplet", "value": "you, allow, to thank"}, {"type": "Semantic Triplet", "value": "you, will start, receiving"}, {"type": "Semantic Triplet", "value": "you, have, to do"}], "speaker": "Salesman", "transcript": "of thinking that this is very simple %HESITATION excitedly you signing up for free on our website triple double you got grabbing dot com once you allow me to thank you want you will start receiving regular emails from mark on letting you know of him service request that we have okay and all you have to do with issues and decide if the work is of interest to you if that is you can go ahead and grab that paragraph that service request if not the content Glenn ignore the email okay", "sentscore": 0.25357142857142856, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 1}]}, {"to": 88.26, "summ": "you're going to be part of the computer taken also check on that brighter now", "tag": "bright", "from": 84.83, "concepts": [{"type": "Topic", "value": "bright"}, {"type": "Topic", "value": "computer"}, {"type": "Topic", "value": "be go"}, {"type": "Topic", "value": "computer take"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "eye albany"}, {"type": "Topic", "value": "service category"}, {"type": "Semantic Triplet", "value": "you, 're going, to be"}], "speaker": "Salesman", "transcript": "you're going to be part of the computer taken also check on that brighter now", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 91.2, "summ": "and their government and very", "tag": "michelle -PRON-", "from": 89.61, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "and their government and very", "sentscore": 0.2, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 93.28, "summ": "do you happen to be in front of the computer", "tag": "michelle -PRON-", "from": 91.38, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "you, happen, to be"}], "speaker": "Salesman", "transcript": "do you happen to be in front of the computer", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 106.02, "summ": "ugly great well you can go ahead and check out the website so you can see how it looked like going to be a clear bit clea", "tag": "website", "from": 95.76, "concepts": [{"type": "Entity", "value": "Tom, PERSON"}, {"type": "Entity", "value": "Metallica, PERSON"}, {"type": "Topic", "value": "website"}, {"type": "Topic", "value": "tom"}, {"type": "Topic", "value": "clear"}, {"type": "Topic", "value": "bit"}, {"type": "Topic", "value": "great"}, {"type": "Topic", "value": "metallica"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "yahoo dot"}, {"type": "Topic", "value": "tax rate"}, {"type": "Semantic Triplet", "value": "Tom, would write, Metallica"}, {"type": "Semantic Triplet", "value": "Tom, would write, for"}], "speaker": "Salesman", "transcript": "ugly great well you can go ahead and check out the website so you can see how it looked like going to be a clear bit clear bit that Tom would write Metallica for you", "sentscore": 0.07500000000000004, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 109.2, "summ": "and you're currently the non playing the computer", "tag": "playing", "from": 106.94, "concepts": [{"type": "Topic", "value": "playing"}, {"type": "Topic", "value": "non"}, {"type": "Topic", "value": "computer"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "you, 're, non"}], "speaker": "Client", "transcript": "and you're currently the non playing the computer", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 125.96, "summ": "I think that's perfectly fine here's what I can do I look like I did not create a free account for your machine out and t", "tag": "temporary", "from": 109.47, "concepts": [{"type": "Topic", "value": "temporary"}, {"type": "Topic", "value": "convenient"}, {"type": "Topic", "value": "free"}, {"type": "Topic", "value": "compromise"}, {"type": "Topic", "value": "account"}, {"type": "Topic", "value": "tax rate"}, {"type": "Topic", "value": "yahoo dot"}, {"type": "Topic", "value": "dot com"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "banker washington"}, {"type": "Semantic Triplet", "value": "I, did not create, account"}, {"type": "Semantic Triplet", "value": "I, did not create, there"}], "speaker": "Salesman", "transcript": "I think that's perfectly fine here's what I can do I look like I did not create a free account for your machine out and there will be providing you a temporary username and they temporary tax rates which I will be sending through email and you can just go ahead and have that compromise at the most convenient time right", "sentscore": 0.4005952380952381, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 2}]}, {"to": 137.86, "summ": "how gay so Michelle dictated by general questions that it will be acting all business grinning but I will not be asking f", "tag": "michelle", "from": 127.81, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "information"}, {"type": "Topic", "value": "personal"}, {"type": "Topic", "value": "general"}, {"type": "Topic", "value": "business"}, {"type": "Topic", "value": "michelle dictate"}, {"type": "Topic", "value": "business grin"}, {"type": "Topic", "value": "compete service"}, {"type": "Topic", "value": "hesitation impair"}, {"type": "Semantic Triplet", "value": "it, will be acting, business"}, {"type": "Semantic Triplet", "value": "you, might provide, is"}], "speaker": "Salesman", "transcript": "how gay so Michelle dictated by general questions that it will be acting all business grinning but I will not be asking for any personal information would you might provide here last name is that okay", "sentscore": 0.16111111111111112, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 144.52, "summ": "Hoxie HR at SAE", "tag": "hr", "from": 142.18, "concepts": [{"type": "Entity", "value": "Hoxie, PERSON"}, {"type": "Topic", "value": "hr"}, {"type": "Topic", "value": "hoxie"}, {"type": "Topic", "value": "sae"}, {"type": "Topic", "value": "hoxie hr"}, {"type": "Topic", "value": "house sit"}, {"type": "Topic", "value": "craigslist"}, {"type": "Topic", "value": "maintenance task"}], "speaker": "Client", "transcript": "Hoxie HR at SAE", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 145.98, "summ": "HR access", "tag": "hr", "from": 145.16, "concepts": [{"type": "Topic", "value": "hr"}, {"type": "Topic", "value": "access"}, {"type": "Topic", "value": "hr access"}, {"type": "Topic", "value": "letter capitalize"}, {"type": "Topic", "value": "customer michelle"}, {"type": "Topic", "value": "michelle send"}, {"type": "Topic", "value": "michelle"}], "speaker": "Salesman", "transcript": "HR access", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 150.23, "summ": "am right yeah I don't want her", "tag": "michelle -PRON-", "from": 148.31, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "I, don't want, her"}], "speaker": "Salesman", "transcript": "am right yeah I don't want her", "sentscore": 0.2857142857142857, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 156.75, "summ": "I got it thank you so much and is it okay if I just call you by first name", "tag": "michelle -PRON-", "from": 152.79, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "I, got, it"}, {"type": "Semantic Triplet", "value": "I, call, you"}], "speaker": "Salesman", "transcript": "I got it thank you so much and is it okay if I just call you by first name", "sentscore": 0.31666666666666665, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 167.48, "summ": "I think you and Michelle I'm not exactly a complete address but you have the option to put that on the lan only if you wa", "tag": "complete", "from": 158.49, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "complete"}, {"type": "Topic", "value": "zip"}, {"type": "Topic", "value": "lan"}, {"type": "Topic", "value": "address"}, {"type": "Topic", "value": "option"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "I, 'm, address"}, {"type": "Semantic Triplet", "value": "you, have, option"}, {"type": "Semantic Triplet", "value": "you, want, to write"}], "speaker": "Salesman", "transcript": "I think you and Michelle I'm not exactly a complete address but you have the option to put that on the lan only if you want to write for now can I just ask for your zip code", "sentscore": -0.025, "sent": "-", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 174.41, "summ": "ninety six three and what city and state protesting", "tag": "city", "from": 171.29, "concepts": [{"type": "Topic", "value": "city"}, {"type": "Topic", "value": "state"}, {"type": "Topic", "value": "state protest"}, {"type": "Topic", "value": "rick tomorrow"}, {"type": "Topic", "value": "be think"}, {"type": "Topic", "value": "mattel"}, {"type": "Topic", "value": "richie"}], "speaker": "Salesman", "transcript": "ninety six three and what city and state protesting", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 176.7, "summ": "banker Washington's", "tag": "washington", "from": 175.41, "concepts": [{"type": "Entity", "value": "Washington, LOCATION"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "banker"}, {"type": "Topic", "value": "banker washington"}, {"type": "Topic", "value": "yahoo dot"}, {"type": "Topic", "value": "tax rate"}, {"type": "Topic", "value": "dot com"}], "speaker": "Client", "transcript": "banker Washington's", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 181.69, "summ": "army and how far can you go for your customers Michelle sent twenty thirty forty or sixty miles", "tag": "customer", "from": 176.87, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "customer"}, {"type": "Topic", "value": "thirty"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "mile"}, {"type": "Topic", "value": "army"}, {"type": "Topic", "value": "customer michelle"}, {"type": "Topic", "value": "michelle send"}, {"type": "Topic", "value": "letter capitalize"}, {"type": "Topic", "value": "hr access"}, {"type": "Semantic Triplet", "value": "Michelle, sent, miles"}], "speaker": "Salesman", "transcript": "army and how far can you go for your customers Michelle sent twenty thirty forty or sixty miles", "sentscore": 0.1, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 183.47, "summ": "Rick tomorrow", "tag": "rick", "from": 182.85, "concepts": [{"type": "Entity", "value": "Rick, PERSON"}, {"type": "Topic", "value": "rick"}, {"type": "Topic", "value": "tomorrow"}, {"type": "Topic", "value": "rick tomorrow"}, {"type": "Topic", "value": "state protest"}, {"type": "Topic", "value": "be think"}, {"type": "Topic", "value": "mattel"}, {"type": "Topic", "value": "richie"}], "speaker": "Client", "transcript": "Rick tomorrow", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 191.03, "summ": "restricting my skin burns nasty not a problem and %HESITATION which email address and he going to send out information to", "tag": "address", "from": 183.57, "concepts": [{"type": "Topic", "value": "address"}, {"type": "Topic", "value": "nasty"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "problem"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "email address"}, {"type": "Topic", "value": "skin burn"}, {"type": "Topic", "value": "yarralumla"}, {"type": "Topic", "value": "service request"}, {"type": "Semantic Triplet", "value": "skin, burns, problem"}, {"type": "Semantic Triplet", "value": "skin, burns, %"}], "speaker": "Salesman", "transcript": "restricting my skin burns nasty not a problem and %HESITATION which email address and he going to send out information to", "sentscore": -1.0, "sent": "--", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 196.95, "summ": "and Richie lacquer I'm at Mattel hot eight haplogroups", "tag": "hot", "from": 192.14, "concepts": [{"type": "Entity", "value": "Richie, PERSON"}, {"type": "Entity", "value": "Mattel, ORGANIZATION"}, {"type": "Topic", "value": "hot"}, {"type": "Topic", "value": "lacquer"}, {"type": "Topic", "value": "mattel"}, {"type": "Topic", "value": "haplogroup"}, {"type": "Topic", "value": "richie"}, {"type": "Topic", "value": "richie lacquer"}, {"type": "Topic", "value": "state protest"}, {"type": "Topic", "value": "rick tomorrow"}, {"type": "Semantic Triplet", "value": "I, 'm, haplogroups"}], "speaker": "Client", "transcript": "and Richie lacquer I'm at Mattel hot eight haplogroups", "sentscore": 0.25, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 198.88, "summ": "I'm sorry can you repeat that", "tag": "michelle -PRON-", "from": 197.6, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "you, repeat, that"}], "speaker": "Salesman", "transcript": "I'm sorry can you repeat that", "sentscore": -0.5, "sent": "--", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 205.51, "summ": "who explained that locker obtained my program and yeah I agree", "tag": "locker", "from": 200.02, "concepts": [{"type": "Topic", "value": "locker"}, {"type": "Topic", "value": "program"}, {"type": "Topic", "value": "locker obtain"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "be go"}, {"type": "Topic", "value": "hesitation dog"}, {"type": "Semantic Triplet", "value": "locker, obtained, program"}], "speaker": "Client", "transcript": "who explained that locker obtained my program and yeah I agree", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 208.38, "summ": "included right", "tag": "michelle -PRON-", "from": 207.54, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Salesman", "transcript": "included right", "sentscore": 0.2857142857142857, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 212.89, "summ": "Yahoo dot com", "tag": "dot", "from": 212.04, "concepts": [{"type": "Entity", "value": "Yahoo, ORGANIZATION"}, {"type": "Topic", "value": "dot"}, {"type": "Topic", "value": "com"}, {"type": "Topic", "value": "yahoo"}, {"type": "Topic", "value": "yahoo dot"}, {"type": "Topic", "value": "dot com"}, {"type": "Topic", "value": "tax rate"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "banker washington"}], "speaker": "Salesman", "transcript": "Yahoo dot com", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 229.43, "summ": "okay so apropos here right we need to verify already there with me what I have here would be the letter M. for merely I. ", "tag": "harry", "from": 214.43, "concepts": [{"type": "Entity", "value": "India, LOCATION"}, {"type": "Entity", "value": "Harry E., PERSON"}, {"type": "Entity", "value": "Alfa Lima Alfa Lima E., ORGANIZATION"}, {"type": "Entity", "value": "India, LOCATION"}, {"type": "Topic", "value": "harry"}, {"type": "Topic", "value": "echo"}, {"type": "Topic", "value": "e."}, {"type": "Topic", "value": "letter"}, {"type": "Topic", "value": "m."}, {"type": "Topic", "value": "alfa lima"}, {"type": "Topic", "value": "harry e."}, {"type": "Topic", "value": "harry e. for"}, {"type": "Topic", "value": "echo alfa"}, {"type": "Semantic Triplet", "value": "we, need, to verify"}], "speaker": "Salesman", "transcript": "okay so apropos here right we need to verify already there with me what I have here would be the letter M. for merely I. for India he personally for Harry E. for echo Alfa Lima Alfa Lima E. for echo each prayer Harry", "sentscore": 0.07142857142857142, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 230.39, "summ": "old for Oscar", "tag": "oscar", "from": 229.46, "concepts": [{"type": "Topic", "value": "oscar"}, {"type": "Topic", "value": "old"}, {"type": "Topic", "value": "service category"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "michelle dictate"}, {"type": "Topic", "value": "alfa lima"}], "speaker": "Client", "transcript": "old for Oscar", "sentscore": 0.1, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 236.4, "summ": "extract great esprit Sam I. for India E. for echo at Yahoo dot com diggity correctly", "tag": "esprit", "from": 230.42, "concepts": [{"type": "Entity", "value": "India, LOCATION"}, {"type": "Entity", "value": "Sam I., PERSON"}, {"type": "Entity", "value": "India, LOCATION"}, {"type": "Entity", "value": "Yahoo, ORGANIZATION"}, {"type": "Topic", "value": "esprit"}, {"type": "Topic", "value": "com"}, {"type": "Topic", "value": "sam"}, {"type": "Topic", "value": "dot"}, {"type": "Topic", "value": "yahoo"}, {"type": "Topic", "value": "yahoo dot"}, {"type": "Topic", "value": "dot com"}, {"type": "Topic", "value": "sam i. for india e. for"}, {"type": "Topic", "value": "tax rate"}], "speaker": "Salesman", "transcript": "extract great esprit Sam I. for India E. for echo at Yahoo dot com diggity correctly", "sentscore": 0.8, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 244.96, "summ": "wonderful thank you and as promised I will go in and provide a temporary user name and password for you please bear with ", "tag": "temporary", "from": 237.99, "concepts": [{"type": "Topic", "value": "temporary"}, {"type": "Topic", "value": "user"}, {"type": "Topic", "value": "wonderful"}, {"type": "Topic", "value": "password"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Salesman", "transcript": "wonderful thank you and as promised I will go in and provide a temporary user name and password for you please bear with me", "sentscore": 1.0, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 250.1, "summ": "and Michelle", "tag": "michelle", "from": 249.27, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "locker obtain"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "be go"}, {"type": "Topic", "value": "hesitation dog"}], "speaker": "Salesman", "transcript": "and Michelle", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 262.1, "summ": "yeah I have one security questioning here but the picture is not the answer that at the time I get a security question is", "tag": "answer", "from": 251.77, "concepts": [{"type": "Topic", "value": "answer"}, {"type": "Topic", "value": "security"}, {"type": "Topic", "value": "graphic"}, {"type": "Topic", "value": "artist"}, {"type": "Topic", "value": "process"}, {"type": "Topic", "value": "security question"}, {"type": "Topic", "value": "be work"}, {"type": "Topic", "value": "work process"}, {"type": "Topic", "value": "start receive"}, {"type": "Topic", "value": "michelle job"}, {"type": "Semantic Triplet", "value": "I, have, questioning"}, {"type": "Semantic Triplet", "value": "picture, is, answer"}, {"type": "Semantic Triplet", "value": "artist, made, me"}, {"type": "Semantic Triplet", "value": "I, 'm working, process"}], "speaker": "Salesman", "transcript": "yeah I have one security questioning here but the picture is not the answer that at the time I get a security question is what is your graphic artist made me right now I'm working process that that answer okay", "sentscore": 0.2619047619047619, "sent": "+", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 273.81, "summ": "I right now our customers have the option of breaking the service that you will be providing them and how would you want ", "tag": "option", "from": 264.31, "concepts": [{"type": "Topic", "value": "option"}, {"type": "Topic", "value": "high"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "particular"}, {"type": "Topic", "value": "customer"}, {"type": "Topic", "value": "italian"}, {"type": "Topic", "value": "anthony"}, {"type": "Topic", "value": "lima e."}, {"type": "Topic", "value": "email address"}, {"type": "Topic", "value": "service category"}, {"type": "Semantic Triplet", "value": "I, have, option"}, {"type": "Semantic Triplet", "value": "customers, have, option"}, {"type": "Semantic Triplet", "value": "you, will be providing, them"}, {"type": "Semantic Triplet", "value": "you, want, to be rated"}], "speaker": "Salesman", "transcript": "I right now our customers have the option of breaking the service that you will be providing them and how would you want to be rated one particular the highest of one to five five Italian", "sentscore": 0.15079365079365079, "sent": "+", "KPIs": [{"type": "Timeline", "value": 5}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 290.64, "summ": "end up with a service category you have the option to put it simply panic are you depending on how many armed service you", "tag": "category", "from": 277.72, "concepts": [{"type": "Topic", "value": "category"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "panic"}, {"type": "Topic", "value": "option"}, {"type": "Topic", "value": "armed"}, {"type": "Topic", "value": "service category"}, {"type": "Topic", "value": "oscar"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "michelle dictate"}, {"type": "Topic", "value": "alfa lima"}, {"type": "Semantic Triplet", "value": "you, have, option"}, {"type": "Semantic Triplet", "value": "I, will put, you"}, {"type": "Semantic Triplet", "value": "you, have, service"}], "speaker": "Salesman", "transcript": "end up with a service category you have the option to put it simply panic are you depending on how many armed service you are providing free now I will put you under the category of that yeah and do you have any other service that you provide", "sentscore": 0.19375, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 1}, {"type": "Q/A", "value": 1}]}, {"to": 295.54, "summ": "I am you mean like the analog", "tag": "michelle -PRON-", "from": 292.65, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "I am you mean like the analog", "sentscore": -0.3125, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 296.96, "summ": "armed the you can", "tag": "michelle -PRON-", "from": 295.99, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Salesman", "transcript": "armed the you can", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 298.99, "summ": "that their in house sitting", "tag": "house sit", "from": 297.63, "concepts": [{"type": "Topic", "value": "house sit"}, {"type": "Topic", "value": "sae"}, {"type": "Topic", "value": "hoxie hr"}, {"type": "Topic", "value": "craigslist"}, {"type": "Topic", "value": "maintenance task"}], "speaker": "Salesman", "transcript": "that their in house sitting", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 301.18, "summ": "are they surprised", "tag": "michelle -PRON-", "from": 300.25, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "are they surprised", "sentscore": 0.1, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 305.87, "summ": "you would want to provide help clean air house sitting", "tag": "clean", "from": 301.26, "concepts": [{"type": "Topic", "value": "clean"}, {"type": "Topic", "value": "air"}, {"type": "Topic", "value": "house"}, {"type": "Topic", "value": "help"}, {"type": "Topic", "value": "provide help"}, {"type": "Topic", "value": "air house"}, {"type": "Topic", "value": "house sit"}, {"type": "Topic", "value": "compete service"}, {"type": "Topic", "value": "hesitation impair"}, {"type": "Semantic Triplet", "value": "you, would want, to provide"}], "speaker": "Salesman", "transcript": "you would want to provide help clean air house sitting", "sentscore": 0.3666666666666667, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 312.35, "summ": "rawhide in the yard yard like that and you are currently not yeah yeah", "tag": "yard", "from": 305.9, "concepts": [{"type": "Topic", "value": "yard"}, {"type": "Topic", "value": "rawhide"}, {"type": "Topic", "value": "yard yard"}, {"type": "Topic", "value": "hr access"}, {"type": "Topic", "value": "italian"}, {"type": "Topic", "value": "harry e."}, {"type": "Topic", "value": "alfa lima"}], "speaker": "Client", "transcript": "rawhide in the yard yard like that and you are currently not yeah yeah", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 314.35, "summ": "all the wonderful", "tag": "michelle -PRON-", "from": 313.04, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Salesman", "transcript": "all the wonderful", "sentscore": 1.0, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 315.62, "summ": "so %HESITATION not", "tag": "michelle -PRON-", "from": 314.7, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "so %HESITATION not", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 320.59, "summ": "read our competing services these %HESITATION impair your both interior and exterior", "tag": "interior", "from": 316.19, "concepts": [{"type": "Topic", "value": "interior"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "service"}, {"type": "Topic", "value": "exterior"}, {"type": "Topic", "value": "compete service"}, {"type": "Topic", "value": "hesitation impair"}, {"type": "Topic", "value": "michelle dictate"}, {"type": "Topic", "value": "provide help"}, {"type": "Topic", "value": "business grin"}, {"type": "Semantic Triplet", "value": "%HESITATION, impair, interior"}, {"type": "Semantic Triplet", "value": "%HESITATION, impair, exterior"}], "speaker": "Salesman", "transcript": "read our competing services these %HESITATION impair your both interior and exterior", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 1}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 323.0, "summ": "learn your exterior", "tag": "michelle -PRON-", "from": 321.71, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "learn your exterior", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 332.73, "summ": "yeah there's a lot in your eyes Albany and you're one of the two categories protect here epilogue in your teens surveyed ", "tag": "eye", "from": 324.13, "concepts": [{"type": "Entity", "value": "Albany, LOCATION"}, {"type": "Topic", "value": "eye"}, {"type": "Topic", "value": "teen"}, {"type": "Topic", "value": "albany"}, {"type": "Topic", "value": "epilogue"}, {"type": "Topic", "value": "category"}, {"type": "Topic", "value": "category protect"}, {"type": "Topic", "value": "survey tell"}, {"type": "Topic", "value": "eye albany"}, {"type": "Topic", "value": "teen survey"}, {"type": "Semantic Triplet", "value": "there, 's, lot"}, {"type": "Semantic Triplet", "value": "you, 're, one"}, {"type": "Semantic Triplet", "value": "Albany, protect, epilogue"}, {"type": "Semantic Triplet", "value": "'re, protect, epilogue"}, {"type": "Semantic Triplet", "value": "you, have, business name"}], "speaker": "Salesman", "transcript": "yeah there's a lot in your eyes Albany and you're one of the two categories protect here epilogue in your teens surveyed told you have a business name", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 342.87, "summ": "I think if we just put your name under it like Michelle job %HESITATION dog house sitter", "tag": "house", "from": 336.64, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "house"}, {"type": "Topic", "value": "job"}, {"type": "Topic", "value": "hesitation"}, {"type": "Topic", "value": "dog"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "hesitation dog"}, {"type": "Topic", "value": "michelle job"}, {"type": "Semantic Triplet", "value": "we, put, name"}, {"type": "Semantic Triplet", "value": "we, put, job %HESITATION dog house sitter"}], "speaker": "Salesman", "transcript": "I think if we just put your name under it like Michelle job %HESITATION dog house sitter", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 356.52, "summ": "Anthony are pretty are you already have a website now", "tag": "anthony", "from": 345.77, "concepts": [{"type": "Entity", "value": "Anthony, PERSON"}, {"type": "Topic", "value": "anthony"}, {"type": "Topic", "value": "website"}, {"type": "Topic", "value": "italian"}, {"type": "Topic", "value": "lima e."}, {"type": "Topic", "value": "email address"}, {"type": "Topic", "value": "service category"}, {"type": "Semantic Triplet", "value": "you, have, website"}], "speaker": "Salesman", "transcript": "Anthony are pretty are you already have a website now", "sentscore": 0.25, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 372.31, "summ": "I get it perfectly fine for the business memory I will go ahead and coffee thing but you can if you have a great this oka", "tag": "business", "from": 358.7, "concepts": [{"type": "Topic", "value": "business"}, {"type": "Topic", "value": "okay"}, {"type": "Topic", "value": "great"}, {"type": "Topic", "value": "thing"}, {"type": "Topic", "value": "simple"}, {"type": "Topic", "value": "coffee thing"}, {"type": "Topic", "value": "business memory"}, {"type": "Topic", "value": "bit dot"}, {"type": "Topic", "value": "activewear bit"}, {"type": "Topic", "value": "web link"}, {"type": "Semantic Triplet", "value": "you, have, great"}, {"type": "Semantic Triplet", "value": "you, have, one"}, {"type": "Semantic Triplet", "value": "it, is licensed, insured"}], "speaker": "Salesman", "transcript": "I get it perfectly fine for the business memory I will go ahead and coffee thing but you can if you have a great this okay but you can just have this one now edit it out one simple act for figure it out your business it is licensed insured funded or not yet", "sentscore": 0.4291666666666667, "sent": "+", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 395.35, "summ": "not a problem give me a few seconds here Michelle there you go congratulations Michelle you now have an existing account ", "tag": "business", "from": 374.67, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "business"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "second"}, {"type": "Topic", "value": "health"}, {"type": "Topic", "value": "account"}, {"type": "Topic", "value": "congratulation michelle"}, {"type": "Topic", "value": "locker obtain"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "be go"}, {"type": "Semantic Triplet", "value": "you, go, congratulations"}, {"type": "Semantic Triplet", "value": "you, have, account"}, {"type": "Semantic Triplet", "value": "we, have given, you"}, {"type": "Semantic Triplet", "value": "you, have, option"}, {"type": "Semantic Triplet", "value": "you, be, health benefits"}], "speaker": "Salesman", "transcript": "not a problem give me a few seconds here Michelle there you go congratulations Michelle you now have an existing account but where did the to maximize the green that her profile that we have given you you have the option of putting pictures on it and putting business logo and creating your own unique business summary should you be even further health benefits sent", "sentscore": 0.11499999999999999, "sent": "+", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 400.96, "summ": "the glass back option from them holding each other but I said this in email that", "tag": "option", "from": 396.33, "concepts": [{"type": "Topic", "value": "option"}, {"type": "Topic", "value": "glass"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "I, said, this"}], "speaker": "Salesman", "transcript": "the glass back option from them holding each other but I said this in email that", "sentscore": -0.0625, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 419.27, "summ": "activewear bit dot com and you just one way I had to generate a lot of great for your business and they go I'll be sendin", "tag": "password", "from": 401.75, "concepts": [{"type": "Topic", "value": "password"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "bit"}, {"type": "Topic", "value": "dot"}, {"type": "Topic", "value": "com"}, {"type": "Topic", "value": "bit dot"}, {"type": "Topic", "value": "activewear bit"}, {"type": "Topic", "value": "web link"}, {"type": "Topic", "value": "dot com"}, {"type": "Topic", "value": "coffee thing"}, {"type": "Semantic Triplet", "value": "I, had, to generate"}, {"type": "Semantic Triplet", "value": "I, 'll be, sending"}, {"type": "Semantic Triplet", "value": "which, will include, reunion"}, {"type": "Semantic Triplet", "value": "I, like, to get"}], "speaker": "Salesman", "transcript": "activewear bit dot com and you just one way I had to generate a lot of great for your business and they go I'll be sending everything out the email which will include your temporary reunion that password that a direct web link to the website for your reference which I like to get here user name and password or would you rather wait for the email", "sentscore": 0.45, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 2}]}, {"to": 424.0, "summ": "I think you have a pen and paper ready", "tag": "paper", "from": 422.27, "concepts": [{"type": "Topic", "value": "paper"}, {"type": "Topic", "value": "ready"}, {"type": "Topic", "value": "pen"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "you, have, pen"}, {"type": "Semantic Triplet", "value": "you, have, paper"}], "speaker": "Salesman", "transcript": "I think you have a pen and paper ready", "sentscore": 0.2, "sent": "+", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 426.06, "summ": "little yeah out here on", "tag": "michelle -PRON-", "from": 424.05, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "little yeah out here on", "sentscore": -0.1875, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 429.81, "summ": "your user name you're thinking that there could be afraid name shall", "tag": "afraid", "from": 426.44, "concepts": [{"type": "Topic", "value": "afraid"}, {"type": "Topic", "value": "user"}, {"type": "Topic", "value": "be think"}, {"type": "Topic", "value": "state protest"}, {"type": "Topic", "value": "rick tomorrow"}, {"type": "Topic", "value": "mattel"}, {"type": "Topic", "value": "richie"}, {"type": "Semantic Triplet", "value": "there, could be, name"}, {"type": "Semantic Triplet", "value": "there, could be, shall"}], "speaker": "Salesman", "transcript": "your user name you're thinking that there could be afraid name shall", "sentscore": -0.6, "sent": "--", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 432.13, "summ": "monetary okay", "tag": "michelle -PRON-", "from": 430.63, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Salesman", "transcript": "monetary okay", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 433.64, "summ": "also not a lot", "tag": "michelle -PRON-", "from": 432.57, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "also not a lot", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 447.95, "summ": "I'm okay now for that that's where it's going to be Michelle their role one but the first letter is capitalized only the ", "tag": "michelle", "from": 434.05, "concepts": [{"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Entity", "value": "Michelle, PERSON"}, {"type": "Topic", "value": "michelle"}, {"type": "Topic", "value": "letter"}, {"type": "Topic", "value": "executive"}, {"type": "Topic", "value": "life"}, {"type": "Topic", "value": "half"}, {"type": "Topic", "value": "be go"}, {"type": "Topic", "value": "locker obtain"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "hesitation dog"}, {"type": "Semantic Triplet", "value": "it, 's going, to be"}, {"type": "Semantic Triplet", "value": "letter, is, half"}], "speaker": "Salesman", "transcript": "I'm okay now for that that's where it's going to be Michelle their role one but the first letter is capitalized only the first letter is only half their life okay executive Michelle their real one", "sentscore": 0.19166666666666668, "sent": "+", "KPIs": [{"type": "Timeline", "value": 2}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 457.15, "summ": "lettered capitalized okay okay I represent here username and password and course of that night would be square bit where ", "tag": "square", "from": 448.41, "concepts": [{"type": "Topic", "value": "square"}, {"type": "Topic", "value": "password"}, {"type": "Topic", "value": "course"}, {"type": "Topic", "value": "night"}, {"type": "Topic", "value": "username"}, {"type": "Topic", "value": "letter capitalize"}, {"type": "Topic", "value": "hr access"}, {"type": "Topic", "value": "customer michelle"}, {"type": "Topic", "value": "michelle send"}, {"type": "Topic", "value": "michelle"}], "speaker": "Salesman", "transcript": "lettered capitalized okay okay I represent here username and password and course of that night would be square bit where did that come", "sentscore": 0.5, "sent": "++", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 459.0, "summ": "up that the email not where there", "tag": "michelle -PRON-", "from": 457.43, "concepts": [{"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}], "speaker": "Client", "transcript": "up that the email not where there", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 1}]}, {"to": 470.4, "summ": "had been necessary before god I think I'll go ahead and send the email now and police detective under a rock it build pea", "tag": "god", "from": 459.54, "concepts": [{"type": "Topic", "value": "god"}, {"type": "Topic", "value": "peace"}, {"type": "Topic", "value": "email"}, {"type": "Topic", "value": "rock"}, {"type": "Topic", "value": "detective"}, {"type": "Topic", "value": "build peace"}, {"type": "Topic", "value": "police detective"}, {"type": "Topic", "value": "yard yard"}, {"type": "Topic", "value": "house sitter"}, {"type": "Topic", "value": "albany"}, {"type": "Semantic Triplet", "value": "it, build, peace"}], "speaker": "Salesman", "transcript": "had been necessary before god I think I'll go ahead and send the email now and police detective under a rock it build peace there second the thumbnail right", "sentscore": 0.09523809523809523, "sent": "+", "KPIs": [{"type": "Timeline", "value": 3}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 477.55, "summ": "okay thank you miss some very positive that we ascribe that come to help you grow your business and enjoy the rest of the", "tag": "business", "from": 472.17, "concepts": [{"type": "Topic", "value": "business"}, {"type": "Topic", "value": "rest"}, {"type": "Topic", "value": "positive"}, {"type": "Topic", "value": "day"}, {"type": "Topic", "value": "michelle -PRON-"}, {"type": "Topic", "value": "zip code"}, {"type": "Topic", "value": "write metallica"}, {"type": "Topic", "value": "washington"}, {"type": "Topic", "value": "tom"}, {"type": "Semantic Triplet", "value": "you, miss, some"}, {"type": "Semantic Triplet", "value": "that, come, to help"}, {"type": "Semantic Triplet", "value": "you, grow, business"}], "speaker": "Salesman", "transcript": "okay thank you miss some very positive that we ascribe that come to help you grow your business and enjoy the rest of the day", "sentscore": 0.39848484848484844, "sent": "+", "KPIs": [{"type": "Timeline", "value": 1}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}, {"to": 480.32, "summ": "thank you Yarralumla like", "tag": "yarralumla", "from": 478.67, "concepts": [{"type": "Entity", "value": "Yarralumla, PERSON"}, {"type": "Topic", "value": "yarralumla"}, {"type": "Topic", "value": "service request"}, {"type": "Topic", "value": "email address"}, {"type": "Topic", "value": "skin burn"}, {"type": "Topic", "value": "hesitation"}], "speaker": "Client", "transcript": "thank you Yarralumla like", "sentscore": 0.0, "sent": "-", "KPIs": [{"type": "Timeline", "value": 0}, {"type": "Competitor", "value": 0}, {"type": "Pricing", "value": 0}, {"type": "Q/A", "value": 0}]}], "summary": "yeah well the reason why I'm calling is because we have a network of customers in Vancouver who were interested in having their services on so we saw your ad and we know your business to help other customers looking for a dog in house sitters would you like to connect with our customers we have in your area this is going to be at no cost to you Michelle.", "topic": [{"y": 23, "name": "Product"}, {"y": 37, "name": "Price"}, {"y": 10, "name": "Competitor"}, {"y": 40, "name": "Company"}], "keywords": [["Michelle", "Michelle", "Craigslist", "Vancouver", "Michelle", "Glenn", "Tom", "Metallica", "Michelle", "Hoxie", "Michelle", "Washington", "Michelle", "Rick", "Richie", "Mattel", "India", "Harry E.", "Alfa Lima Alfa Lima E.", "Sam I.", "India", "Yahoo", "Michelle", "Albany", "Michelle", "Anthony", "Michelle", "Michelle", "Michelle", "Michelle", "Yarralumla", "michelle", "locker obtain", "house sitter", "be go", "hesitation dog", "vancouver", "customer look", "michelle job", "hesitation", "dog house", "yahoo dot", "tax rate", "dot com", "washington", "banker washington", "metallica", "tom", "write metallica", "yahoo", "sam i. for india e. for", "state protest", "rick tomorrow", "be think", "mattel", "richie", "richie lacquer", "dog house", "hoxie hr", "com diggity", "michelle", "michelle", "business", "email", "service", "customer", "option", "right", "hesitation", "great", "website"], [13, 15, 14, 14, 10, 11, 15, 13, 10, 15, 15, 15, 15, 13, 11, 13, 11, 11, 13, 15, 13, 15, 11, 13, 10, 14, 11, 15, 10, 13, 12, 7, 7, 8, 8, 10, 6, 9, 7, 6, 7, 5, 9, 10, 10, 9, 10, 10, 7, 7, 7, 7, 5, 8, 8, 5, 8, 8, 7, 6, 9, 3, 5, 2, 1, 0, 5, 5, 4, 5, 1]], "keywords_trank": [["michelle", 0.029223192945658394], ["business", 0.02613233201728034], ["email", 0.0257340739642526], ["service", 0.022224243782114628], ["customer", 0.01481502339407724], ["option", 0.014566015863421376], ["right", 0.01249658853513766], ["hesitation", 0.012424551618446337], ["great", 0.011712748416157406], ["website", 0.011681324995209309]], "keywords_lda": ["michelle", "locker obtain", "house sitter", "be go", "hesitation dog", "vancouver", "customer look", "michelle job", "hesitation", "dog house", "yahoo dot", "tax rate", "dot com", "washington", "banker washington", "metallica", "tom", "write metallica", "yahoo", "sam i. for india e. for", "state protest", "rick tomorrow", "be think", "mattel", "richie", "richie lacquer", "dog house", "hoxie hr", "com diggity", "michelle"], "NER": [["Michelle", "PERSON"], ["Michelle", "PERSON"], ["Craigslist", "PERSON"], ["Vancouver", "LOCATION"], ["Michelle", "PERSON"], ["Glenn", "PERSON"], ["Tom", "PERSON"], ["Metallica", "PERSON"], ["Michelle", "PERSON"], ["Hoxie", "PERSON"], ["Michelle", "PERSON"], ["Washington", "LOCATION"], ["Michelle", "PERSON"], ["Rick", "PERSON"], ["Richie", "PERSON"], ["Mattel", "ORGANIZATION"], ["India", "LOCATION"], ["Harry E.", "PERSON"], ["Alfa Lima Alfa Lima E.", "ORGANIZATION"], ["Sam I.", "PERSON"], ["India", "LOCATION"], ["Yahoo", "ORGANIZATION"], ["Michelle", "PERSON"], ["Albany", "LOCATION"], ["Michelle", "PERSON"], ["Anthony", "PERSON"], ["Michelle", "PERSON"], ["Michelle", "PERSON"], ["Michelle", "PERSON"], ["Michelle", "PERSON"], ["Yarralumla", "PERSON"]]}};
*/

configData = "";
function loadJSON() {
    var index = document.URL.indexOf('#');
    if (index == -1){index = document.URL.length;}
    else {index = index + 1;}
    var clip = document.URL.slice(index);
    if (clip.length <= 1){
        clip = "clip2";
    }
    $.getJSON( "../" + clip + '.json', function(jd) {
        obj = jd;
        console.log(obj);
        init();
    });
};

//// MUTATE CODE STARTS mutating object found
var mutate_count = 5;

function getSegObj(type){
    if (type == "client")
    return {
                    "from":3.4545,
                    "to":5.4545,
                    "sent": "+",
                    "sentscore": 0.7,
                    "speaker": "Client",
                    "tag": "sojern",
                    "summ": "there's no obligation and so was wondering if I can go ahead...",
                    "transcript": "and it's completely free there's no obligation and so was wondering if I can go ahead and set you up with that",
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
                    "sentscore": 0.63,
                    "speaker": "Salesman",
                    "tag": "product",
                    "summ": "Specializing in traveler path-to-purchase data for over a decade...",
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
                    "transcript": "Specializing in traveler path-to-purchase data for over a decade, Sojern is travel’s direct demand engine for thousands of brands—from global enterprises to boutique operators—across the hotel, airline, cruise, transportation, tourism industries and more.",

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
    var key = "KPIs";
    res += compileCat(key, spec);

    key = "concepts";
    res += compileCat(key, spec);

    return res;


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
        <!--<div class=\"ui hidden divider\" name=\"{10}\"></div>-->\
<div class=\"event\" id=\"{10}\">\
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
                    <i class=\"large sscore icons\">\
                                    <i class=\"{6} icon\"></i>\
                                    {7}\
                                  </i>\
                    </div>\
\
                    <!-- <div class=\"ui divider\"></div> -->\
                        <div class=\"ui extra accordion\">\
                          <div class=\"ui grey header title\">\
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
                                <i class=\"large sscore icons\">\
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
spec.sent[0] == "+"?"smile":(spec.sentscore == 0?"meh":"frown"),
getSubIcon(spec.sent),
getTags(spec),
spec.transcript,
spec.from);

    };
}();



// First, checks if it isn't implemented yet.

function init(){

$(document).ready(function(){

//aligning statistics to center
$(".statistics-cont").css("text-align", "center");


var ls = 0;
var point_ls = "below";
var add_pause = false;
function clip_seg(spec){
    var els = []
    if (spec.from > ls){
        var pause = $("<div class=\"step disabled\">\
                        <div class=\"content\">\
                        <div class=\"floating ui grey label\">{0}</div>\
                          <div class=\"title\">...</div>\
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

var filter_segs = false;
var thresh = 5;
var rdur = 0;
// calculating duration
for (var i=0; i<lim; i++){
    var span = segs[i].to - segs[i].from;
    rdur += span;
    if (filter_segs){
        if (span < thresh){
            segs.splice(i, 1);
            i--;
            lim--;
            rdur -= span;
        }
    }
}
console.log(dur);
console.log(rdur);
dur = rdur;
for (var i=0; i<lim; i++){

    var els = clip_seg(segs[i]);
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
    $("." + stat).text(round(parseInt(obj.clip.stats[stat])));
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
  .accordion({
    onClose: function () {
        $(this).parent().children(".blue").removeClass("blue").addClass("grey");
        //$acc = $('.ui.accordion > .blue').removeClass("blue").addClass("grey");
    //$acc.children(".blue")
    }
})
;

// toggle accordion when step is clicked
$(".step.active").click(function(){
    var $this = $(this);
    var id = $this.attr("href").slice(1);
    $acc = $('.ui.accordion');
    $acc.accordion('close', 0);
    $acc.children(".blue").removeClass("blue").addClass("grey");
    $($(document.getElementById("{0}".format(id))).find(".accordion")[0]).accordion("open", 0).children(".grey").removeClass("grey").addClass("blue");
});

// overall summary
$("#o-summary").append($("<blockquote>").text(obj.clip.summary));

// adding feed

// sidebar onclick

$(".menu > .launch").click(function (){
    $('.ui.sidebar')
  .sidebar('toggle')
;
});

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

// var mutate_cloud = 5;
// for (var j=0; j<mutate_cloud; j++){
//     for (var i=0; i<lim; i++){
//         words.push({text: words[i]["text"], size: j+1});
//     }
// }

d3.wordcloud()
        .size([680, 200])
        .selector('#wordcloud')
        .words(words)
        .start();

});





//////////////////


$(function () {
    var id = $("#container").data("id");
    function test(data){

            // for (var cat in ["activity", "alerts"]){
            //     cat = ["activity", "alerts"][cat];
            //     for (el in data[cat]){
            //         // console.log(cat);
            //         // console.log(el);
            //         // console.log(data[cat][el]);
            //         // console.log(data[cat][el][0]);
            //         var date_el = data[cat][el][0].split('-');
            //         date_el[1] = parseInt(date_el[1]) - 1
            //        data[cat][el][0] = Date.UTC.apply(null, date_el);
            //     }
            // }

            var lim = obj.clip.segments.length;
            var data = [];
            for (var i=0; i<lim; i++){
                if (obj.clip.segments[i].speaker == "Client")
                data.push([obj.clip.segments[i].to, obj.clip.segments[i].sentscore])
            }

            Highcharts.chart('container', {

    title: {
        text: 'Sentiment of Client through the duration of call'
    },

    subtitle: {
        text: 'ranges from (-1, 1)'
    },

    yAxis: {
        title: {
            text: 'Sentiment Score'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },



    series: [{
        showInLegend: false,
        name: 'Sentiment',
        data: data//[[2.3, 43934], [4.5, 52503], [6.7, 57177], [7.9, 69658], [9.8, 97031], [13, 119931], [17, 137133], [21, 154175]]
    }]

}); // end line curve

            // pie chart

            var monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
                ];





        }
        // function ends
        test({"upper": 2, "ends": "2017-06-28", "starts": "2017-06-28", "alerts": [["lol", 0], ["lol", 3]], "activity": [["2df7", 0], ["2df", 3]], "percent_alerts": 60});






    });
    
    // enable default accordion
    var timeoutID = window.setTimeout(function(){$($(".event .accordion")[0]).accordion("open", 0);}, 1000);
}

loadJSON() ;
