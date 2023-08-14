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
        document.getElementById("showDigitalSurvey").addEventListener("click", this.showDigitalSurvey);
        document.getElementById("resetState").addEventListener("click", this.resetState);

        // Enable debug logs
        cordova.plugins.VerintXM.setDebugLogEnabled("true", this.onSuccess, this.onError);

        // Check eligibility on start to demonstrate showing an incomplete invite
        cordova.plugins.VerintXM.checkEligibility(this.onSuccess, this.onError);

        // Listeners
        cordova.plugins.VerintXM.setInviteListener(function success(data) {}, function failure(error) {});
        cordova.plugins.VerintXM.setDigitalListener(function success(data) {}, function failure(error) {});

        // Register Verint-Verint SDK for notification tap events
        if (device.platform == "iOS") {
            cordova.plugins.notification.local.on("click", function (notification) {
                if (notification.EXPLocalNotificationMeasureKey != null) {
                    cordova.plugins.VerintXM.showSurvey(notification.EXPLocalNotificationMeasureKey, this.onSuccess, this.onFailure);
                }
            }, this);  
        }

        // Request permissions for Android 33
        if (device.platform == "Android") {
            var permissions = cordova.plugins.permissions;

            permissions.hasPermission(permissions.POST_NOTIFICATIONS, function (status) {
                if (status.hasPermission) {
                    // Permission has been granted previously, no need to request it again.
                } else {
                    var error = function () {
                        // Permission has been denied.
                        console.warn('permission has been denied');
                    };

                    var success = function (status) {
                        if (!status.hasPermission) {
                            // Permission has been denied.
                            error();
                        } else {
                            console.warn('permission has been granted');
                        }
                    };

                    // Request the permission to allow notifications.
                    permissions.requestPermission(permissions.POST_NOTIFICATIONS, success, error);
                }
            })
        }
    },

    // checkEligibility button click handler
    checkEligibility: function() {
        console.log("Check if eligible for survey");
        cordova.plugins.VerintXM.incrementSignificantEvent("instant_survey", this.onSuccess, this.onError);
        cordova.plugins.VerintXM.checkEligibility(this.onSuccess, this.onError);   
    },

    // show invite button click handler
    showInvite: function() {
        console.log("Show invite click");
        cordova.plugins.VerintXM.showInvite("android_app_QA", this.onSuccess, this.onError);
    },

    // show digital survey button click handler
    showDigitalSurvey: function() {
        console.log("Show DigitalSurvey click");
        cordova.plugins.VerintXM.showDigitalSurvey(this.onSuccess, this.onError);
    },

    resetState: function() {
        console.log('Reset the Verint SDK state');
        cordova.plugins.VerintXM.resetState(this.onSuccess, this.onError);
    }
};

app.initialize();
