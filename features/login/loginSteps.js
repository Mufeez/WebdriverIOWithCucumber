"use strict";
Object.defineProperty(exports,"__esModule",{value:true});

const cucumber=require('cucumber');
const loginPage=require('../../pages/login');
const homePage=require('../../pages/home');

cucumber.Given('I am on Login Page',function(){
    browser.url('/');
    homePage.loginButton.click();
    //$('.login').click();
    browser.pause(5000);
})

cucumber.When('I Click login button',function(){
   // $('#SubmitLogin').click();
   loginPage.loginButton.click();
});

cucumber.When('I Enter username as {string}',function(username){
   // $('[name="email"]').setValue(username)
    loginPage.userName.setValue(username);
});

cucumber.When('I Enter password as {string}',function(password){
   //  $('[name="passwd"]').setValue(password)
   loginPage.password.setValue(password);

});

cucumber.Then('I am logged in',function(){
     browser.pause(5000);
});














