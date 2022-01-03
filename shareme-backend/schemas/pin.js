export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "url",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      oiptions: {
        hotspot: true,
      },
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save" }],
    },
    {
      name: "coments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
  ],
};
