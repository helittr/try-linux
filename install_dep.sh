# intall linux build tools 
apt install git bc bison flex libssl-dev make libelf-dev libncurses-dev -y

# install gcc and gdb
apt install gcc-arm-linux-gnueabihf gdb-multiarch -y

# install qemu 
apt install qemu-system-arm -y

# shallow clone try-linux and submodule with 
# git fetch --depth=1 --recursive --shallow-submodules -j 3 -b dev https://github.com/helittr/try-linux.git ~/try


