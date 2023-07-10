
try-rootfs:
	$(info Test target try-rootfs)
	$(info PRJ_DIR = $(PRJ_DIR))
	$(info OUT = $(OUT))
	$(info CURDIR = $(CURDIR))

copy-files:
	$(info Copy lib to $(OUT)/root)
	mkdir -p $(OUT)/root/lib
	cp -u /usr/arm-linux-gnueabihf/lib/* -t $(OUT)/root/lib
	$(info Copy etc to $(OUT)/root)
	cp -fr ./etc/ -t $(OUT)/root/
