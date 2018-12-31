const sqlite = require("sqlite");
const Sequelize = require("sequelize");
const bson = require("bson");

const debug = require("debug")(__filename);

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
});

const statuses = {
    active: "active",
    inactive: "inactive"
}

const Url = sequelize.define("url", {
    id: {
        type: Sequelize.STRING,
        defaultValue: () => String(new bson.ObjectId()),
        primaryKey: true,
    },
    url: {
        type: Sequelize.STRING,
    },
    path: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.ENUM,
        values: [statuses.active, statuses.inactive]
    }
}, {
    timestamps: true
});

sequelize.sync();

export default Url;
