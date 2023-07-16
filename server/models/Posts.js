module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title : {type: DataTypes.STRING, isallowNull: false},
        content : {type: DataTypes.STRING, isallowNull: false},
        username : {type: DataTypes.STRING, isallowNull: false},
    })

    return Posts;
}