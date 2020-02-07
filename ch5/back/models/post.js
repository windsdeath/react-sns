module.exports = (sequelize, DataTypes)=> {
    const Post = sequelize.define('Post',{
        content:{
            type: DataTypes.TEXT, // 20글자 이하 문자열
            allowNull:false, // 필수 true라면 선택
        },
    }, {
        charset: 'utf8mb4',  // 한글+이모티콘
        collate: 'utf8mb4_general_ci', // 위에 charset과 함께 설정해야 한글이 저장이 됨.
    });
    
    Post.associate = (db)=> {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post);
    };
    
    return Post;
}