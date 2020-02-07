module.exports = (sequelize, DataTypes)=> {
    const Image = sequelize.define('Image',{
        content:{
            type: DataTypes.STRING(200), // 20글자 이하 문자열
            allowNull:false, // 필수 true라면 선택
        },
    }, {
        charset: 'utf8',  // 한글+이모티콘
        collate: 'utf8_general_ci', // 위에 charset과 함께 설정해야 한글이 저장이 됨.
    });
    
    Image.associate = (db)=> {
        db.Image.belongsTo(db.Post);
    };
    
    return Image;
}