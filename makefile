
img: dockerfile
	docker build . --tag helittr/try-linux:latest

run: img
	docker run -it --rm --name try -p 8000:22 helittr/try-linux:latest

push:
	docker image push helittr/try-linux:latest

all: img push

.phony: img run push all
