module.exports = (sequelize, DataTypes)=> {
    const HashTag = sequelize.define('HashTag',{
        content:{
            type: DataTypes.STRING(20), // 20글자 이하 문자열
            allowNull:false, // 필수 true라면 선택
        },
    }, {
        charset: 'utf8mb4',  // 한글+이모티콘
        collate: 'utf8mb4_general_ci', // 위에 charset과 함께 설정해야 한글이 저장이 됨.
    });
    
    HashTag.associate = (db)=> {
        db.HashTag.belongsToMany(db.Post, {through:'PostHashTag'}); // 다대다 관계에서 어쩔수없이 생기는 중간테이블 through에 명시
    };
    
    return HashTag;
}