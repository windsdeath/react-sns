module.exports = (sequelize, DataTypes)=> {
    const User = sequelize.define('User',{ //테이블명 users -> 첫글자가 소문자, 뒤에 s가 자동으로 붙음
        nickname:{
            type: DataTypes.STRING(20), // 20글자 이하 문자열
            allowNull:false, // 필수 true라면 선택
        },
        userId:{
            type: DataTypes.STRING(20),
            allowNull:false,
            unique:true, // 고유한 값 여부
        },
        password:{
            type: DataTypes.STRING(100), // 100글자 이하 문자열
            allowNull:false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 위에 charset과 함께 설정해야 한글이 저장이 됨.
    });
    
    User.associate = (db)=> {
        db.User.hasMany(db.Post, {as : 'Post'});
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through:'Like', as:'Liked'});
        db.User.belongsToMany(db.User, {through:'Follow', as :'Followers'});
        db.User.belongsToMany(db.User, {through:'Follow', as : 'Followings'});
    };
    
    return User;
}