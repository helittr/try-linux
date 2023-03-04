FROM ubuntu:focal

USER root

ADD sources.list /etc/apt/ 

# install ssh
RUN apt update && apt upgrade -y

# install openssh
RUN apt install openssh-server -y && mkdir -p /run/sshd

# intall linux build tools 
RUN apt install git bc bison flex libssl-dev make -y

# install gcc
RUN apt install gcc-arm-linux-gnueabihf -y

# install qemu 
RUN apt install qemu -y

# clone raspbian linux kernel source tree
# https://gitee.com/mirrors/linux_old1.git
# https://github.com/torvalds/linux
#RUN git clone --depth=1 https://github.com/raspberrypi/linux -b rpi-5.15.y /root/rasbian_linux/
#RUN git clone --depth=1 https://gitee.com/mirrors/linux_old1.git /root/linux/

# start sshd
ADD sshd.conf /etc/ssh/sshd_config.d/
CMD /usr/sbin/sshd -D -e
EXPOSE 22/tcp
