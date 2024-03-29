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
        { text: "controlnet", link: "/aigc/sd/controlnet" },
        { text: "gpt生成sd关键词", link: "/aigc/sd/gpt" },
        { text: "stable diffusion", link: "/aigc/sd/" },
        { text: "sd参数列表", link: "/aigc/sd/options" }
      ],
    },
    {
      text: "lora",
      collapsible: true,
      collapsed: false,
      items: [{ text: "lora介绍", link: "/aigc/lora/" }],
    },

    {
      text: '视频搬砖',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'fluent-ffmpeg',
          link: '/aigc/video/'
        }
      ]
    }
  ],
};
