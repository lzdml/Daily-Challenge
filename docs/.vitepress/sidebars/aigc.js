export default {
  "/aigc/": [
    {
      text: "AIGC",
      collapsible: true,
      collapsed: false,
      items: [{ text: "AIGC初识", link: "/aigc/" }],
    },
    {
      text: "SD",
      collapsible: true,
      collapsed: false,
      items: [
        { text: "gpt生成sd关键词", link: "/aigc/sd/gpt" },
        { text: "stable diffusion", link: "/aigc/sd/" }
      ],
    },
    {
      text: "lora",
      collapsible: true,
      collapsed: false,
      items: [{ text: "lora介绍", link: "/aigc/lora/" }],
    },
  ],
};
