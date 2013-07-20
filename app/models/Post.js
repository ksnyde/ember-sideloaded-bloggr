/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, DS: false, module: false*/

App = require("app");
module.exports = App.Post = DS.Model.extend({
  title: DS.attr("string"),
  author: DS.attr("string"),
  intro: DS.attr("string"),
  extended: DS.attr("string"),
  publishedAt: DS.attr("date")  
});