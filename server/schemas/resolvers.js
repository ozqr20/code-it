const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('__v -password')
                    .populate('posts')

                return userData
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async() => {
            return User.find()
            .select('-__v -password')
            .populate('posts')
        },
        user: async (parent, {username}) => {
            return User.findOne({username})
            .select('-__v -password')
            .populate('posts')
        },
        posts: async (parent, { username }) => {
            const params = username ? {username} : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async(parent, {_id}) => {
            return Post.findOne({_id});
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          addPost: async (parent, args, context) => {
            if (context.user) {
              const post = await Post.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post._id } },
                { new: true }
              );
      
              return post;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          addReactPost: async (parent, args, context) => {
            if (context.user) {
              const reactpost = await ReactPost.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { reactposts: reactpost._id } },
                { new: true }
              );
      
              return reactpost;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          // singleUpload: (parent, args) => {
          //   return args.file.then(file => {
          //     const {createReadStream, filename, mimetype} = file
      
          //     const fileStream = createReadStream();
          //     fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`))
      
          //     return file;
          //   });
          //   throw new AuthenticationError('You need to be logged in');
          // },
          removePost: async (parent, { postId }, context) => {
            if(context.user){
              const updateUser = await User.findByIdAndUpdate(
                { _id: context.user._id},
                { $pull: { posts: {postId: postId}}},
                { new: true }
              );
              return updateUser;
            }
            throw new AuthenticationError('You need to be logged in');
          },
          addComment: async (parent, { commentId, commentBody }, context) => {
            if (context.user) {
              const updatedPost = await Post.findOneAndUpdate(
                { _id: commentId },
                { $push: { comments: { commentBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
      
              return updatedPost;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          addReactComment: async (parent, { reactcommentId, reactcommentBody }, context) => {
            if (context.user) {
              const updatedReactPost = await ReactPost.findOneAndUpdate(
                { _id: reactcommentId },
                { $push: { reactcomments: { reactcommentBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
      
              return updatedReactPost;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          }
    }
}

module.exports = resolvers;