---
home: true
icon: home
title: 主页
heroImage: 
heroAlt: Try-Linux
heroText: try-linux
tagline: 使用 docker 学习 linux 源码，内置 linux 源码 以及构建环境，并且可以使用 qemu 进行类似硬件级调试。
copyright: false
footer: build by Vuepress | MIT, copyright © 2023-present holy

actions:
  - text: 开始使用 💡
    link: /use/
    type: primary 

  - text: 创建项目 📖
    link: /project/

  - text: 学习内核 ✍️
    link: /learn/

features:
  - title: Docker 部署
    icon: build
    details: 使用 docker 快速部署，无需手动配置编译环境
    link:

  - title: 纯净 linux
    icon: linux
    details: 官方 linux 内核源码 
    link:

  - title: qemu 调试
    icon: debug
    details: 使用 qemu 调试运行内核
    link:
---

# Linux 源码调试镜像

该仓库被用于创建一个 Linux 源码编译调试镜像，方便调试和理解 linux 内核. 

## 地址

- github：      https://github.com/helittr/try-linux
- gitee ：      https://gitee.com/helittr/try-linux
- docker-hub:   https://hub.docker.com/repository/docker/helittr/try-linux/general
## 描述

- 该镜像基于 ubuntu:focal 构建而来，在此基础上安装了必要的工具。
- 修改 ubuntu 镜像源为 清华源 (https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/) 加速包的下载 
- 包含Linux 源码，以及 qemu 方便快速调试
