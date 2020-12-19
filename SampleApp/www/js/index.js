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

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onSuccess: function(data) {
        console.log("Success call " + data);
    }, 

    onError: function(err) {
        alert('Error');
        console.log("Error call " + err);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        document.getElementById("checkEligibility").addEventListener("click", this.checkEligibility);
        document.getElementById("showInvite").addEventListener("click", this.showInvite);
        document.getElementById("showFeedback").addEventListener("click", this.showFeedback);
        document.getElementById("resetState").addEventListener("click", this.resetState);

        var millisecondsToWait = 2000;
        setTimeout(function() {
            cordova.plugins.ForeSeeAPI.start(this.onSuccess);
    
            // Enable debug logs
            cordova.plugins.ForeSeeAPI.setDebugLogEnabled(["true"], this.onSuccess, this.onError);
    
            // Check eligibility on start to demonstrate showing an incompleted invite
            cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);   
    
            // Register Verint-ForeSee SDK for notification tap events
            if(device.platform == "iOS") {

                // Subscribe to the 'click' event on local notifications
                // (will only work whe the app is still loaded)
                cordova.plugins.notification.local.on("click", function (notification) {
                    if (notification.FSLocalNotificationMeasureKey != null) {
                    cordova.plugins.ForeSeeAPI.showSurvey([notification.FSLocalNotificationMeasureKey], this.onSuccess, this.onFailure);
                    }
                }, this);  

                // Determine if the app was launched from a 'click' event on a local notification
                // (will only work whe the app is killed)
                // WARNING: This could cause the ForeSee survey to launch if your app's push notifications also fulfil this conditional
                var launchDetails = cordova.plugins.notification.local.launchDetails;    
                if (typeof launchDetails != 'undefined' 
                    && launchDetails.action == 'click') {
                            
                    // This workaround is hardcoded to a particular SID, and will only work 
                    // if you know which survey (SID) is launched from your local notification
                    cordova.plugins.ForeSeeAPI.showSurvey(["android_app_QA"], this.onSuccess, this.onFailure);
                }
            }    
        }, millisecondsToWait);
     },

    // checkEligibility button click handler
    checkEligibility: function() {
        console.log("Check if eligible for survey");
        cordova.plugins.ForeSeeAPI.incrementSignificantEventCount(["instant_survey"], this.onSuccess, this.onError);
        cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);   
    },

    // show invite button click handler
    showInvite: function() {
        console.log("Show invite click");
        cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], this.onSuccess, this.onError);
    },

    // show feedback button click handler
    showFeedback: function() {
        console.log("Show feedback click");
        cordova.plugins.ForeSeeAPI.showFeedback(this.onSuccess, this.onError);
    },

    resetState: function() {
        console.log('Reset the ForeSee SDK state');
        cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onError);
    }
};

app.initialize();
