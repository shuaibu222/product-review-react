export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'motto',
      type: 'string',
      title: 'Motto',
    },
    {
      name: 'productLink',
      type: 'url',
      title: 'Product Link',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'overview',
      type: 'text',
      title: 'Overview',
    },
    {
      name: 'imageLink',
      type: 'url',
      title: 'Image Link',
    },
  ],
}
