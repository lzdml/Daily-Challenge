### 什么是 lora

- 全名:  
  `LOW-RANK ADAPTATION OF LARGE LANGUAGE MODEL`

- 直译:  
  `大语言模型的低阶适应, 这是微软的研究人员为了解决大语言模型微调开发的一项技术`

- 一句话总结:  
  `低秩自适应（LoRa）在大语言模型中的优化：通过冻结大语言模型中的预训练权重，同时在 Transformer 架构中的每一层中加入了可训练的低秩分解矩阵，通过低秩矩阵来运算，可以极大的减少网络的运算参数量。与直接使用 adam 对网络进行直接优化相比，使用 LoRa 对网络进行调整可以减少一万倍的参数量级。 ` **`提取特征+应用特征`**

### 怎么去使用 lora 模型(以 SD 为例)

- **`1`**

![](/assets/lora-start.jpg)

- **`2`**

![](/assets/sd.jpg)

- **`3`**

![](/assets/sd-lora.jpg)

---
