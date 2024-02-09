module.exports = (sequelize, Sequelize, types) => {
    const User = sequelize.define(
        "users", // tábla név
        {
            // mező lista
            id: {
                type: types.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            email: {
                type: types.STRING,
                primaryKey: false,
            },

            firstName: {
                type: types.STRING,
                primaryKey: false,
            },

            lastName: {
                type: types.STRING,
                primaryKey: false,
            },
            password: {
                type: types.STRING,
                primaryKey: false,
            },
        },
        {
            // beállítások
            freezeTableName: true,
            paranoid: false,
            timestamps: false,
            hasTrigger: true,
        }
    );

    return User;
}