const debug = require("debug")(__filename);

export default class CrudController {

    async create(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        return this.model.bulkCreate(data);
    }

    async read(query, options) {
        debug("read ", query);
        const finishedQuery = Object.assign({}, {where: query}, options);
        console.log("finishedQuery", finishedQuery);
        return this.model.findAll(finishedQuery);
    }
    async find(query, options) {
        return this.read(query, options);
    }

    async update() {
        throw new Error("Not Implemented");
    }

    async delete() {
        throw new Error("Not Implemented");
    }

    async count(query) {
        return this.model.count({where: query})
    }

}
