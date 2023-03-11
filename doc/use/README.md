---
 sidebar: 'auto'
---

# Try-Linux

你是否有过因为学习 linux 而选择各种开发板而烦恼？搭建构建环境和下载源码各种报错而放弃？频繁刷写镜像而厌烦？
此项目被用于解决这些烦恼，让你初学者快速的学习和调试 linux 内核源码。并且详细的记录镜像的搭建流程，使用方式以及
记录 linux 开发流程。你可以按照步骤构建一个属于自己的镜像。经过这个流程相信你会收获颇丰。

::: warning 注意
本文会提及大量的知识来源，笔者认为 **通常来说, 没有比官方文档更好的文档！！！**。大量的知识都来至于官方文档，并阅读
的过程中总结而来，当你遇到问题而通过本文或者搜索引擎无法解决时，它就是最好的资料。
:::

## 仓库地址

- github：      https://github.com/helittr/try-linux
- gitee ：      https://gitee.com/helittr/try-linux
- docker-hub:   https://hub.docker.com/repository/docker/helittr/try-linux/general

## 镜像描述

- 该镜像基于 ubuntu:focal 构建而来，在此基础上安装了必要的工具。
- 修改 ubuntu 镜像源为 清华源 (https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/) 加速包的下载 
- 包含Linux 源码，以及 qemu 方便快速调试

### [openssh](https://man.openbsd.org/sshd.8)

容器启动时会启动 sshd 服务。用于在宿主机上通过 vscode 等支持远程开发的工具链接到该容器，进行构建和调试。

### linux 构建依赖

包含 make，git 等构建内核必备的工具。
详细的工具可以查看docker构建脚本 dockerfile 中的工具安装命令。

### 编译器

默认安装 gcc-arm-linux-gnueabihf 交叉编译工具。

### linux 源码

使用浅克隆方式下载源码避免镜像体积太大,默认下载树莓派源码到 **/root/linux/** 目录下。

## 安装依赖

在使用镜像之前你需要安装一些必备的程序，[docker](http://docker.p2hp.com/) 是一个工具，可以使程序运行的与主机隔离的环境中。

在此之前你可能使用过想 Vmware, VirtualBox, qemu 等，虚拟机程序。他们可以运行一个独立的操作系统,如: windows, debian, ubuntu …… 。
他们的都是通过代码虚拟化 CPU, 硬盘等硬件设备, 通过软件的方式模拟一个机器码执行环境，来运行操作系统。通常这些虚拟机产品的性能都比较差,
因为大部分计算都用于模拟 CPU 等硬件设备，并且操作系统镜像通常很大难以分发。

而 docker 与这个虚拟机产品相比，它不需要模拟硬件设备，而是使用宿主机的系统，着重在隔离进程, 文件, 等资源。 而不是隔离整个操作系统，
所以有着与在宿主机几乎一样的性能。被广泛运用在分布式，云应用，自动话部署等领域。

它也可以用与开发中，打包一个源码和构建环境的镜像，省去了环境搭建的时间并且使所有的开发者都使用相同的环境，可以避免因环境而导致的各种问题。

### 安装 docker

TODO: 待补充

::: tip
你可以参考 [docker doc](https://docs.docker.com/) 来获取详细的了解它。
:::

## 镜像使用

### 你可以执行下面命令快速启动镜像

```sh
docker run -p -d 22:22  -e ROOTPASSWD=root -u ming:ming  try-linux
```

你通过设置环境变量 ROOTPASSWD， 来设置容器中 root 用户的密码，默认为 root.

### 测试连接

如果你使用的是 bash shell 执行下面命令来连接到容器：

:::: code-group
::: code-group-item bash
```bash
ssh root@`hostname`.local
```
:::
::: code-group-item powershell
```powershell
ssh root@$(hostname).local
```
:::
::::

如果成功连接表示容器成功运行起来。

### 设置免密登录

1. 如果你的系统中没有可用的密钥对,你可以使用 ssh-keygen 生成 ssh 密钥对

```bash
ssh-keygen -t rsa
```

所有输入信息留空，直到设置完成。

2. 将公钥上传至容器

对于 bash 用户, 你可以使用 ssh-copy-id 命令上传公钥至主机

:::: code-group
::: code-group-item bash
```bash
ssh-copy-id root@$(hostname).local
```
:::
::: code-group-item powershell
```powershell
ssh root@coin.local "echo $(cat ~/.ssh/id_rsa.pub) >> ~/.ssh/authorized_keys"
```
:::
::::

配置成功后你可以无需输入密码，便可以登录到主机。如何登录可以参考 [**测试连接**](#测试连接)

### 更多