ifndef PRJ_DIR
	export PRJ_DIR := $(abspath ./)
endif

ifndef OUT
	export OUT := $(abspath $(PRJ_DIR)/out)
endif

try:
	$(info This is try target)
	$(info PRJ_DIR = $(PRJ_DIR))
	$(info OUT = $(OUT))
	$(info CURDIR = $(CURDIR))

	make -C $(PRJ_DIR)/rootfs try-rootfs

img: dockerfile
	docker build . --tag helittr/try-linux:latest

run-docker: docker-img
	docker run -it --rm --name try -p 8000:22 helittr/try-linux:latest

push:
	docker image push helittr/try-linux:latest

config-kernel:
	make -C ./linux ARCH=arm O=$(OUT)/linux CROSS_COMPILE=arm-linux-gnueabihf- -j8 menuconfig

zImage:
	$(info Start to build linux kernel)
	make -C ./linux ARCH=arm O=$(OUT)/linux CROSS_COMPILE=arm-linux-gnueabihf- -j8 multi_v7_debug_defconfig zImage

run:
	qemu-system-arm -m 4096 -initrd $(OUT)/images/initramfs.cpio.gz -kernel $(OUT)/images/zImage -machine virt -nographic -append 'root=ram0 rdinit=/linuxrc console=ttyAMA0'

run-debug:
	qemu-system-arm -m 4096 -kernel $(OUT)/images/zImage -machine virt -nographic -s -S -append 'init=linuxrc console=ttyAMA0'

root:
	mkdir -p $(OUT)/root
	mkdir -p $(OUT)/busybox
	$(info Start to build busybox)
	make -C $(PRJ_DIR)/busybox ARCH=arm O=$(OUT)/busybox CROSS_COMPILE=arm-linux-gnueabihf- CONFIG_PREFIX=$(OUT)/root defconfig busybox install

	make -C $(PRJ_DIR)/rootfs copy-files

images: root zImage
	mkdir -p $(OUT)/images
	$(info Packaging Root File System)
	cd $(OUT)/root && find . | cpio -o -H newc | gzip > $(OUT)/images/initramfs.cpio.gz
	cp -u $(OUT)/linux/arch/arm/boot/zImage  $(OUT)/images/
	$(info images dir: $(OUT)/images)

.PHONY: img run push all zImage test rootfs try images
