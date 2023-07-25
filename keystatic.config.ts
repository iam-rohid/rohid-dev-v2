import { collection, config, fields } from "@keystatic/core";

export default config({
  storage:
    process.env.NODE_ENV === "production"
      ? {
          kind: "github",
          repo: {
            name: "rohid-dev",
            owner: "iam-rohid",
          },
        }
      : {
          kind: "local",
        },
  collections: {
    posts: collection({
      label: "Posts",
      path: "src/content/posts/*/",
      slugField: "title",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        isDraft: fields.checkbox({ label: "Draft Mode", defaultValue: true }),
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: {
            length: {
              max: 300,
            },
          },
        }),
        publishedDate: fields.date({
          label: "Published Date",
          defaultValue: { kind: "today" },
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "/public/images/posts",
          publicPath: "/images/posts/",
        }),
        content: fields.document({ label: "Content", formatting: true }),
      },
    }),
  },
});
