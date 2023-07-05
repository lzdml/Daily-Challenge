---
layout: home

hero:
  name: 每日一题
  text: 守正出奇, 知行合一
  actions:
    - theme: brand
      text: OPEN
      link: /challenge/
    - theme: alt
      text: github
      link: https://github.com/lzdml/Daily-Challenge
    - theme: alt
      text: 算法复杂性备忘单
      link: https://www.bigocheatsheet.com/




features:
  - icon: 🚁️
    title: 时间复杂度
    details: 指算法执行所需的时间量，通常以运行步骤的数量表示。它衡量算法在处理输入数据时所需的时间成本。时间复杂度可以帮助我们预估算法在不同输入规模下的执行时间。常见的时间复杂度包括 O(1)、O(log n)、O(n)、O(n log n)、O(n^2)等
  - icon: 💯
    title: 空间复杂度
    details: 指算法在执行过程中所需的存储空间量，通常以所使用的额外内存的大小表示。它衡量算法在处理输入数据时所需的存储成本。空间复杂度可以帮助我们预估算法在不同输入规模下所需的额外内存空间。常见的空间复杂度包括是O(1)、O(n)、O(n^2)等
---
<style>

    .container .main .text {
        font-size: 20px;
        background: linear-gradient(120deg, #81FFEF 10%, #F067B4 100%);
        -webkit-background-clip: text;
        background-clip: text;
    }

    .VPButton.medium.brand, .VPButton.medium.alt {
        border: 0;
        padding: 4px 30px;
        border-radius: 10px;
    }

</style>


<render-page />