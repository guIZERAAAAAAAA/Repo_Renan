import database from "../config/database.js"

class User {
    constructor() {
        this.model = database.db.define("user", {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: database.db.Sequelize.INTEGER
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false
                //unique true
            }
        })

    }


}
export default new User().model