"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudyMaterialMongo extends UuObjectDao {

    async createSchema(){
        await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
      }
      async get(awid, id) {
        return await super.findOne({ awid, id });
      }
      async list(awid, pageInfo) {
        return await super.find({ awid }, pageInfo);
      }
      async delete( id) {
        await super.deleteOne({ id });
      }
      async update(awid, pageInfo) {
        let filter = { id: studymaterial.id, awid: studymateria.awid }
        return await super.findOneAndUpdate(filter, studymaterial, "NONE");
      }
    }

    module.exports = SubjectMongo;