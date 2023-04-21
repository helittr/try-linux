#include <stdio.h>
#include <unistd.h>

int main(char argn, char *argv[])
{
    int cnt =0;

    printf("exec init in initramfs");
    for (int i = 0; i < argn; i++)
    {
        printf("arg%d: %s\n", argn, argv[i]);
    }

    while(1){
        printf("init %d ... ...\n", cnt);
        cnt++;
        fflush(stdout);
        sleep(1);
    }

    return 0;
}
