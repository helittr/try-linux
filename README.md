# Linux 源码调试镜像

该仓库被用于创建一个 Linux 源码编译调试镜像，方便调试和理解 linux 内核. 

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

## 镜像使用

### 你可以执行下面命令快速启动镜像

```
docker run -p 22:22 -d  -e ROOTPASSWD=root -u ming:ming  try-linux
```
你通过设置环境变量 ROOTPASSWD， 来设置容器中 root 用户的密码，默认为 root.


### 测试连接

如果你使用的是 bash shell 执行下面命令来连接到容器：

```bash
ssh root@`hostname`.local
```

或 powershell

```powershell
ssh root@$(hostname).local
```

如果成功连接表示容器成功运行起来。

### 设置免密登录

1. 如果你的系统中没有可用的密钥对,你可以使用 ssh-keygen 生成 ssh 密钥对

```bash
ssh-keygen -t rsa
```

所有输入信息留空，知道命令推出。

2. 将公钥上传至容器

对于 bash 用户, 你可以使用 ssh-copy-id 命令上传公钥至主机

```bash
ssh-copy-id root@$(hostname).local
```

或者 powershell 用户

```powershell
ssh root@$(hostname).local "echo $(cat ~/.ssh/id_rsa.pub) >> ~/.ssh/authorized_keys"
```

配置成功后你可以无需输入密码，便可以登录到主机。如何登录可以参考 [**测试连接**](#测试连接)

### 更多