/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var jsonConfig = '{"clientId":"Ij6P1lfZHchO/co10lQ4BQ==","cxReplayEnabled":true,"measures":[{"surveyId":"app_test_1","daysSinceLaunch":0,"launchCount":0,"significantEventThresholds":{"app_test_1": 4}}]}';

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        cordova.plugins.ForeSeeAPI.start(this.onSuccess);

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        document.getElementById("showSurvey").addEventListener("click", showSurvey);	
        document.getElementById("showInvite").addEventListener("click", showInvite);
        document.getElementById("checkEligibility").addEventListener("click", checkEligibility);	
        document.getElementById("addCPPValue").addEventListener("click", addCPPValue);		
        document.getElementById("removeCPPValue").addEventListener("click", removeCPPValue);	
        document.getElementById("incrementPageViews").addEventListener("click", incrementPageViews);	
        document.getElementById("incrementSignificantEvent").addEventListener("click", incrementSignificantEventCount);	
        document.getElementById("resetState").addEventListener("click", resetState);	


        document.getElementById("showSurveyFail1").addEventListener("click", showSurveyFail1);
        document.getElementById("showSurveyFail2").addEventListener("click", showSurveyFail2);
        document.getElementById("showInviteFail").addEventListener("click", showInviteFail);
        document.getElementById("addCPPFail1").addEventListener("click", addCPPFail1);
        document.getElementById("addCPPFail2").addEventListener("click", addCPPFail2);
        document.getElementById("removeCPPFail").addEventListener("click", removeCPPFail);

        document.getElementById("startWithConfigFile").addEventListener("click", startWithConfigFile);
        document.getElementById("startWithConfigJson").addEventListener("click", startWithConfigJson);
        document.getElementById("setSkipPoolingCheck").addEventListener("click", setSkipPoolingCheck);
        document.getElementById("customInviteAccepted").addEventListener("click", customInviteAccepted);
        document.getElementById("customInviteDeclined").addEventListener("click", customInviteDeclined);
        document.getElementById("getContactDetails").addEventListener("click", getContactDetails);
        document.getElementById("setContactDetails").addEventListener("click", setContactDetails);
        document.getElementById("getVersion").addEventListener("click", getVersion);
        document.getElementById("isDebugLogEnabled").addEventListener("click", isDebugLogEnabled);
        document.getElementById("setDebugLogEnabled").addEventListener("click", setDebugLogEnabled);

        document.getElementById("start").addEventListener("click", start);

        //Replay
        document.getElementById("startRecording").addEventListener("click", startRecording);
        document.getElementById("logReplayPageChange").addEventListener("click", logReplayPageChange);
        document.getElementById("setMaskingDebugEnabled").addEventListener("click", setMaskingDebugEnabled);
        document.getElementById("isRecording").addEventListener("click", isRecording);
        document.getElementById("pauseRecording").addEventListener("click", pauseRecording);
        document.getElementById("resumeRecording").addEventListener("click", resumeRecording);    

        document.getElementById("setInviteListener").addEventListener("click", setInviteListener);       
                
        console.log('Received Event: ' + id);
    }
};


function _onSuccess(data){
    console.log("Success call " + data);
}

function _onError(err){
    alert('Error');
    console.log("Error call " + err);
}

function showSurvey() {
    console.log("ForeSeeAPI example Show Survey clicked");
    cordova.plugins.ForeSeeAPI.showSurvey(["android_app_QA"], function success(data){
        console.log("showSurvey - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("showSurvey - failure " + data);
    });   
}

function showInvite(){
    console.log("ForeSeeAPI example Show Invite");
    cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], function success(data){
        console.log("showInvite - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("showInvite - failure " + data);
    });  
}

function checkEligibility(){
    console.log("ForeSeeAPI example Check Eligibility");
    cordova.plugins.ForeSeeAPI.checkEligibility(function success(data){
        console.log("checkEligibility - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("checkEligibility - failure " + data);
    });  
}

function addCPPValue(){
    console.log("ForeSeeAPI example addCPPvalue");
    cordova.plugins.ForeSeeAPI.addCPPValue(["hello", "bye"], function success(data){
        console.log("addCPPValue - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("addCPPValue - failure " + data);
    });  
}

function removeCPPValue(){
    console.log("ForeSeeAPI example removeCPPvalue");
    cordova.plugins.ForeSeeAPI.removeCPPValue(["hello"], function success(data){
        alert('Success');
        console.log("removeCPPValue - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("removeCPPValue - failure " + data);
    });  
}

function incrementPageViews(){
    console.log("ForeSeeAPI example incrementPageViews");
    cordova.plugins.ForeSeeAPI.incrementPageViews(function success(data){
        console.log("incrementPageViews - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("incrementPageViews - failure " + data);
    });  
}

function incrementSignificantEventCount(){
    console.log("ForeSeeAPI example significantEvent");
    cordova.plugins.ForeSeeAPI.incrementSignificantEventCount(["hello"], function success(data){
        alert('Success');
        console.log("incrementSignificantEventCount - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("incrementSignificantEventCount - failure " + data);
    });  
}

function resetState(){
    console.log("ForeSeeAPI reset state");
    cordova.plugins.ForeSeeAPI.resetState(function success(data){
        console.log("resetState - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("resetState - failure " + data);
    });  
}


/* Failure Tests */

function showSurveyFail1() {
    console.log("ForeSeeAPI example Show Survey Fail clicked");
    cordova.plugins.ForeSeeAPI.showSurvey([], function success(data){
        console.log("showSurveyFail1 - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("showSurveyFail1 - failure " + data);
    });  
    //cordova.plugins.ForeSeeAPI.showSurvey([{}], _onSuccess, _onFailure); 
    //cordova.plugins.ForeSeeAPI.showSurvey(null, _onSuccess, _onFailure); 
}

function showSurveyFail2() {
    console.log("ForeSeeAPI example Show Survey Fail clicked");
    cordova.plugins.ForeSeeAPI.showSurvey(["ahaha"], function success(data){
        console.log("showSurveyFail2 - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("showSurveyFail2 - failure " + data);
    }); 
}

function showInviteFail() {
    console.log("ForeSeeAPI example Show Inivte Fail clicked");
    cordova.plugins.ForeSeeAPI.showInvite([], function success(data){
        console.log("showInviteFail - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("showInviteFail - failure " + data);
    });  
}

function addCPPFail1() {
    console.log("ForeSeeAPI example addCPP Fail #1 clicked");
    cordova.plugins.ForeSeeAPI.addCPPValue([], function success(data){
        console.log("addCPPFail1 - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("addCPPFail1 - failure " + data);
    }); 

    //cordova.plugins.ForeSeeAPI.addCPPValue(25, _onSuccess, _onFailure); 
    //cordova.plugins.ForeSeeAPI.addCPPValue({}, _onSuccess, _onFailure); 
    //cordova.plugins.ForeSeeAPI.addCPPValue(null, _onSuccess, _onFailure); 

}

function addCPPFail2() {
    console.log("ForeSeeAPI example addCPP Fail #2 clicked");
    cordova.plugins.ForeSeeAPI.addCPPValue(["ahaha"],function success(data){
        console.log("addCPPFail2 - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("addCPPFail2 - failure " + data);
    }); 
    //cordova.plugins.ForeSeeAPI.addCPPValue([], _onSuccess, _onFailure);  
    //cordova.plugins.ForeSeeAPI.addCPPValue([{}], _onSuccess, _onFailure);
}

function removeCPPFail() {
    console.log("ForeSeeAPI example removeCPP Fail clicked");
    cordova.plugins.ForeSeeAPI.removeCPPValue([], function success(data){
        console.log("removeCPPFail - success " + data);
    }
    , function failure(data){
        alert('Error');
        console.log("removeCPPFail - failure " + data);
    });  
    //cordova.plugins.ForeSeeAPI.removeCPPValue([], _onSuccess, _onFailure); 
    //cordova.plugins.ForeSeeAPI.removeCPPValue([{}], _onSuccess, _onFailure); 
}

function startWithConfigFile(){
    console.log("ForeSeeAPI example startWithConfigurationFile clicked");
    cordova.plugins.ForeSeeAPI.startWithConfigurationFile(["my_config.json"], function success(data){
        console.log("startWithConfigurationFile - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("startWithConfigurationFile - failure " + data);
    });  
}

function start() {
    console.log("ForeSeeAPI example start() clicked");
    cordova.plugins.ForeSeeAPI.start(function success(data){
        console.log("start - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("start - failure " + data);
    });   
}

function startWithConfigJson(){
    console.log("ForeSeeAPI example startWithConfigJson clicked");
    console.log(jsonConfig);
    cordova.plugins.ForeSeeAPI.startWithConfigurationJson([jsonConfig], function success(data){
        console.log("startWithConfigJson - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("startWithConfigJson - failure " + data);
    });  
}

function setSkipPoolingCheck(){
    console.log("ForeSeeAPI example setSkipPoolingCheck clicked");

    cordova.plugins.ForeSeeAPI.setSkipPoolingCheck(["true"], function success(data){
        console.log("setSkipPoolingCheck - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("setSkipPoolingCheck - failure " + data);
    });  
}

function customInviteAccepted(){
    console.log("ForeSeeAPI example customInviteAccepted clicked");
    cordova.plugins.ForeSeeAPI.customInviteAccepted(function success(data){
        console.log("customInviteAccepted - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("customInviteAccepted - failure " + data);
    });  
}

function customInviteDeclined(){
    console.log("ForeSeeAPI example customInviteDeclined clicked");
    cordova.plugins.ForeSeeAPI.customInviteDeclined(function success(data){
        console.log("customInviteDeclined - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("customInviteDeclined - failure " + data);
    });  
}

function getContactDetails(){
    console.log("ForeSeeAPI example getContactDetails clicked");
    cordova.plugins.ForeSeeAPI.getContactDetails(function success(data){
        console.log("getContactDetails - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("getContactDetails - failure " + data);
    });  
}

function setContactDetails(){
    console.log("ForeSeeAPI example setContactDetails clicked");
    cordova.plugins.ForeSeeAPI.setContactDetails(["Bob"], function success(data){
        console.log("setContactDetails - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("setContactDetails - failure " + data);
    });  
}

function getVersion(){
    console.log("ForeSeeAPI example getVersion clicked");
    cordova.plugins.ForeSeeAPI.getVersion(function success(data){
        console.log("getVersion - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("getVersion - failure " + data);
    });  
}

//isDebug Enabled
function isDebugLogEnabled(){
    console.log("ForeSeeAPI example isDebugLogEnabled clicked");
    cordova.plugins.ForeSeeAPI.isDebugLogEnabled(function success(data){
        console.log("isDebugLogEnabled - success " + data)
    }, function failure(data){
        alert('Error');
        console.log("isDebugLogEnabled - failure " + data);
    });  
}

function setDebugLogEnabled(){
    console.log("ForeSeeAPI example setDebugLogEnabled clicked");

    cordova.plugins.ForeSeeAPI.setDebugLogEnabled(["true"], function success(data){
        console.log("setDebugLogEnabled - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("setDebugLogEnabled - failure " + data);
    });  
}


function startRecording(){
    console.log("ForeSeeAPI example startRecording clicked");

    cordova.plugins.ForeSeeAPI.startRecording(_onSuccess, _onError);  
}

function logReplayPageChange(){
    console.log("ForeSeeAPI example logReplayPageChange clicked");

    cordova.plugins.ForeSeeAPI.logReplayPageChange(["Page1"], function success(data){
        console.log("logReplayPageChange - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("logReplayPageChange - failure " + data);
    });  
}

function setMaskingDebugEnabled(){
    console.log("ForeSeeAPI example setMaskingDebugEnabled clicked");

    cordova.plugins.ForeSeeAPI.setMaskingDebugEnabled(["true"], function success(data){
        console.log("setMaskingDebugEnabled - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("setMaskingDebugEnabled - failure " + data);
    });  
}

//isRecording
function isRecording(){
    console.log("ForeSeeAPI example isRecording clicked");
    cordova.plugins.ForeSeeAPI.isRecording(function success(data){
        console.log("isRecording - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("isRecording - failure " + data);
    });  
}


//pauseRecording
function pauseRecording(){
    console.log("ForeSeeAPI example pauseRecording clicked");
    cordova.plugins.ForeSeeAPI.pauseRecording(function success(data){
        console.log("pauseRecording - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("pauseRecording - failure " + data);
    });  
}


//resumeRecording
function resumeRecording(){
    console.log("ForeSeeAPI example resumeRecording clicked");
    cordova.plugins.ForeSeeAPI.resumeRecording(function success(data){
        console.log("resumeRecording - success " + data);
    }, function failure(data){
        alert('Error');
        console.log("resumeRecording - failure " + data);
    });  
}

function setInviteListener(){
    console.log("ForeSeeAPI example setInviteListener clicked");
    cordova.plugins.ForeSeeAPI.setInviteListener(function success(data){
        console.log("setInviteListener - success " + data);
        alert(data);
    }, function failure(data){
        alert('Error');
        console.log("setInviteListener - failure " + data);
    }); 
}


app.initialize();