export default {
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
    },
    {
      name: 'postId',
      type: 'string',
      title: 'Post ID',
    },
  ],
}
