FROM ubuntu:focal

USER root

ADD src/sources.list /etc/apt/ 

# install ssh
RUN apt update && apt upgrade -y

# install openssh
RUN apt install openssh-server -y && mkdir -p /run/sshd

# intall linux build tools 
RUN apt install git bc bison flex libssl-dev make libelf-dev libncurses-dev -y

# install gcc and gdb
RUN apt install gcc-arm-linux-gnueabihf gdb-multiarch -y

# install qemu 
RUN apt install qemu-system-arm -y

# clone raspbian linux kernel source tree
# https://gitee.com/mirrors/linux_old1.git
# https://github.com/torvalds/linux
#RUN git clone --depth=1 https://github.com/raspberrypi/linux -b rpi-5.15.y /root/rasbian_linux/
RUN git clone --depth=1 https://gitee.com/mirrors/linux_old1.git ~/linux/
ADD linux/.vscode/ /root/linux/.vscode/

# start sshd
ADD src/sshd.conf /etc/ssh/sshd_config.d/

# rootfs
RUN git clone --depth=1  git://busybox.net/busybox.git ~/initramfs/busybox/
ADD initramfs/ /root/initramfs/

# set root's password
ENTRYPOINT if [ -z $ROOTPASSWD ]; then ROOTPASSWD=root; fi; echo root:$ROOTPASSWD | chpasswd; /usr/sbin/sshd -D -e;

EXPOSE 22/tcp
