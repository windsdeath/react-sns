module.exports = (sequelize, DataTypes)=> {
    const User = sequelize.define('User',{
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
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
    };
    
    return User;
}