"use strict";
const ProjectMainAbl = require("../../abl/project-main-abl.js");

class ProjectMainController {

  load(ucEnv) {
    return ProjectMainAbl.load(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  init(ucEnv) {
    return ProjectMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new ProjectMainController();
