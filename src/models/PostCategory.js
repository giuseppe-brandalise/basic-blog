module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });
  PostCategory.associate = ({ BlogPost, Category, PostCategory }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  return PostCategory;
};