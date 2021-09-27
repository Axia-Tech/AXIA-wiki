---
id: learn-PRE
title: AXIASolar Runtime 环境 (PRE)
sidebar_label: AXIASolar Runtime 环境 (PRE)
---

AXIASolar Runtime 环境是 AXIASolar 协议的重要组成部分。 它由网络层，共识和 Wasm VM 子系统组成，并充当 AXIASolar runtime 和平行链 runtime 的基础堆栈底层。AXIASolar RE 可以视为运行 AXIASolar 中继链的虚拟机的同义词（尽管如下所述，链逻辑本身与其运行的 PRE 之间有明显的分隔）。

AXIASolar RE 组件为：

- 网络交互
- 状态存储和 Trie 树
- 共识引擎
- Wasm 虚拟机 (VM)

Runtime（定义为实现链逻辑的代码）与 AXIASolar RE 分离。 这两个组件的分离使 runtime 可以轻松升级，而无需升级 AXIASolar RE。

AXIASolar runtime（以及平行链 runtime）必须编译成 WebAssembly(Wasm) Blob。 AXIASolar runtime 将 "插件" 放到 AXIASolar RE 并且可以通过治理机制进行交换。

下图取自 Gavin Wood 在 Substrate 上展示的[ PPT ](https://slides.com/axia-tech/axiasubstrate#/8)，并演示了 AXIASolar 堆栈的四 层 。

![PRE](assets/PRE.png)

## 资源

- [AXIASolar Runtime Environment Protocol Specification](https://github.com/axia-tech/axiasolar-spec) - Incubator for the PRE spec, including tests.
