
CC := arm-linux-gnueabihf-gcc
O := out

initramfs : init
	cd busybox; \
	mkdir -p out; \
	make ARCH=arm O=./out CROSS_COMPILE=arm-linux-gnueabihf- CONFIG_PREFIX=../../out defconfig busybox install
	mkdir -p out/lib
	cp /usr/arm-linux-gnueabihf/lib/* -t /root/initramfs/out/lib/
	cd out;	\
	find . | cpio -o -H newc | gzip > ../initramfs.cpio.gz

init : init/init.o
	mkdir -p out
	$(CC) $^ -o $(O)/init
	cd out;	\
	find . | cpio -o -H newc | gzip > ../initramfs.cpio.gz 

clean:
	rm -rf out
	rm initramfs.cpio.gz 
