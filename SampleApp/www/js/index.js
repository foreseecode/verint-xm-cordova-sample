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

    onSuccess: function(data){
        console.log("Success call " + data);
    }, 

    onError: function(err){
        alert('Error');
        console.log("Error call " + err);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // checkEligibility button click handler
    checkEligibility: function(){
        console.log("Check if eligible for survey");
        cordova.plugins.ForeSeeAPI.incrementSignificantEventCount(["instant_survey"], this.onSuccess, this.onError);
        cordova.plugins.ForeSeeAPI.checkEligibility(this.onSuccess, this.onError);   
    },

    //show invite button click handler
    showInvite: function(){
        console.log("Show invite click");
        cordova.plugins.ForeSeeAPI.showInvite(["android_app_QA"], this.onSuccess, this.onError);
    },

    resetState: function(){
        console.log('Reset the ForeSee SDK state');
        cordova.plugins.ForeSeeAPI.resetState(this.onSuccess, this.onError);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //cordova.plugins.ForeSeeAPI.start(this.onSuccess);
        cordova.plugins.ForeSeeAPI.setDebugLogEnabled([true]);

        var jsonConfig = '{"clientId":"Ij6P1lfZHchO/co10lQ4BQ==","cxReplayEnabled":true,"measures":[{"surveyId":"app_test_1","daysSinceLaunch":0,"launchCount":0,"significantEventThresholds":{"app_test_1": 4}}]}';
        cordova.plugins.ForeSeeAPI.startWithConfigurationJson([jsonConfig], function success(data) {
            cordova.plugins.ForeSeeAPI.setMaskingDebugEnabled([true]);
        }, function failure(data){
            alert('Error');
            console.log("startWithConfigJson - failure " + data);
        });



        document.getElementById("checkEligibility").addEventListener("click", this.checkEligibility);
        document.getElementById("showInvite").addEventListener("click", this.showInvite);
        document.getElementById("resetState").addEventListener("click", this.resetState);

        console.log('Received Event: ' + id);
    }
};


app.initialize();
