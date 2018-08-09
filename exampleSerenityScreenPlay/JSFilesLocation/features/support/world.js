"use strict";
const serenity_js_1 = require("serenity-js");
const actors_1 = require("../../spec/actors");
module.exports = function () {
    this.World = function () {
        this.stage = serenity_js_1.serenity.callToStageFor(new actors_1.Actors());
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mZWF0dXJlcy9zdXBwb3J0L3dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBdUM7QUFDdkMsOENBQTJDO0FBRTNDLGlCQUFTO0lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyJ9