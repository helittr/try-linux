import{_ as i,M as t,p as d,q as r,R as e,t as s,N as n,V as l,a1 as c}from"./framework-48b97196.js";const h="/try-linux/assets/vscode-install-0cb92f3c.png",u="/try-linux/assets/vscode-extention-dbeb6098.png",p="/try-linux/assets/ssh-150eeb5c.png",m="/try-linux/assets/connected-cd6b1849.png",v={},b=e("h1",{id:"使用-vscode-连接服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-vscode-连接服务器","aria-hidden":"true"},"#"),s(" 使用 Vscode 连接服务器")],-1),_={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://code.visualstudio.com/docs",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"安装-vscode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-vscode","aria-hidden":"true"},"#"),s(" 安装 Vscode")],-1),x={href:"https://code.visualstudio.com/#alt-downloads",target:"_blank",rel:"noopener noreferrer"},k={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},S=c('<p>通常国内用户下载都比较慢，这是因为下载源是国外的。你可以将下载链接中的域名替换为 <code>vscode.cdn.azure.cn</code>, 如此一来你便可以通过国内的镜像源来下载。</p><p><img src="'+h+'" alt=""></p><p>在安装过程中建议勾选这几项，这将提高使用体验。</p><h3 id="安装扩展" tabindex="-1"><a class="header-anchor" href="#安装扩展" aria-hidden="true">#</a> 安装扩展</h3><p>安装完成后，打开 vscode，默认是不支持远程开发功能的，需要安装 remote-ssh 来启用此功能。</p><p><img src="'+u+'" alt=""></p><ul><li><ol><li>首先点击最左侧的扩展图标，打开扩展市场</li></ol></li><li><ol start="2"><li>扩展搜索栏搜索 <code>ssh</code></li></ol></li><li><ol start="3"><li>点击安装 Remote-ssh 扩展即可</li></ol></li><li><ol start="4"><li>根据提示是否需要重启即可</li></ol></li></ul><h2 id="连接到服务器" tabindex="-1"><a class="header-anchor" href="#连接到服务器" aria-hidden="true">#</a> 连接到服务器</h2><p>准备工作已经结束了，可以正式的进行连接工作了。</p>',9),V=e("p",null,[e("img",{src:p,alt:""})],-1),N=e("li",null,[e("ol",null,[e("li",null,"点击最左下角的连接图标")])],-1),y=e("li",null,[e("ol",{start:"2"},[e("li",null,[s("在弹出来的选项中选择 "),e("code",null,"Connect to Host..."),s(" ➡️ "),e("code",null,"Add New SSH Host")])])],-1),E={start:"3"},L=e("code",null,"ssh root@localhost",-1),B=c(`<div class="custom-container tip"><p class="custom-container-title">提示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@<span class="token variable"><span class="token variable">\`</span><span class="token function">hostname</span><span class="token variable">\`</span></span>.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不要在连接命令中输入像上面中的 <code>hostname</code> 那样的子命令，如过在本机你可以使用 <code>localhost</code> 代替, 就像下面这样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> root@localhost.local
<span class="token comment">#或</span>
<span class="token function">ssh</span> root@127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="跨设备连接" tabindex="-1"><a class="header-anchor" href="#跨设备连接" aria-hidden="true">#</a> 跨设备连接</h3><p>如果需要在局域网的另一台设备，连接你需要关闭防火墙或则设置策略来允许外部主机连接。随后你可以使用 主机 的IP地址来连接。 你也可以通过 MNDS 的域名来连接，以 <code>.local</code> 结尾的域名或通过 MDNS 去解析 IP 地址，MNDS 是在局域网内通过名字来解析 IP 地址的设备发现协议。 可以通过 <code>hostname</code> 命令获取到主机的名字，然后 加上 <code>.local</code> 的域名来连接。如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>PS C:\\Users\\11396&gt; hostname
join
PS C:\\Users\\11396&gt; ssh root@join.local -p 222
Welcome to Ubuntu 20.04.5 LTS (GNU/Linux 5.15.90.1-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

This system has been minimized by removing packages and content that are
not required on a system that users do not log into.

To restore this content, you can run the &#39;unminimize&#39; command.
Last login: Sun Mar 12
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div></div><h3 id="打开源码目录" tabindex="-1"><a class="header-anchor" href="#打开源码目录" aria-hidden="true">#</a> 打开源码目录</h3><p><img src="`+m+`" alt=""></p><p>当显示以上界面时便成功连接到容器中的服务器。其中的命令行界面便是连接到的服务器上的虚拟终端。你可以通过 <code>code</code> 命令来 <code>vscode</code> 交互。 在其中执行下列名命令，当前的 vscode 窗口便会重新加载，并打开 linux 源码目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@0eb7a32e07d2:~<span class="token comment"># ls</span>
linux
root@0eb7a32e07d2:~<span class="token comment"># cd linux/</span>
root@0eb7a32e07d2:~/linux<span class="token comment"># code . -a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过 快捷键 <kbd>Ctrl</kbd>+<kbd>\`</kbd>, 快速定位到终端。</p>`,9),C={href:"https://code.visualstudio.com/docs/getstarted/tips-and-tricks",target:"_blank",rel:"noopener noreferrer"};function M(U,I){const o=t("ExternalLinkIcon"),a=t("RouterLink");return d(),r("div",null,[b,e("p",null,[e("a",_,[s("vscode"),n(o)]),s(" 是一个开源的文本编辑器, 默认支持 typescript，JavaScript 等语言的自动补全，高亮提示等。基于 node electron 开发，得益于脚本的语言方便扩展以及开源的特性，许多开发者贡献该项目，并却为其开发许多扩展，使其成为了可高度自定义，功能丰富的编辑器。")]),e("p",null,[s("你可以访问"),e("a",g,[s("Vcode官方文档"),n(o)]),s("，了解其详细的功能。")]),f,e("p",null,[s("进入 "),e("strong",null,[e("a",x,[s("Vscode 下载页"),n(o)])]),s(" 来获取最新的稳定版的 "),e("a",k,[s("vscode"),n(o)]),s("。")]),S,e("p",null,[s("通过"),n(a,{to:"/use/"},{default:l(()=>[s("安装并启动章节")]),_:1}),s(", 我们已经验证服务器可以成功连接，并且设置好密钥来实现免密连接了。 Remote-ssh 扩展正是 通过 ssh 连接到远程服务器来实现远程开发的，连接之后会 在服务器上安装 vscode-server 服务，来处理客户端的请求。")]),V,e("ul",null,[N,y,e("li",null,[e("ol",E,[e("li",null,[s("最后输入 ssh 连接命令, 就像 "),n(a,{to:"/use/#%E6%B5%8B%E8%AF%95%E8%BF%9E%E6%8E%A5"},{default:l(()=>[s("测试连接")]),_:1}),s(" 章节一样，如："),L])])])]),B,e("p",null,[s("你可以阅读 "),e("a",C,[s("Vscdoe TipS"),n(o)]),s(", 了解更多特性。")])])}const R=i(v,[["render",M],["__file","UseVscode.html.vue"]]);export{R as default};