# 配置 WSL 踩过的坑

在 Windows 11 23H2 **家庭中文版** 上配置 WSL 踩了特别多的坑

## 前情提要

- 配置 WSL2

- 这台电脑全部用户采用英文用户名
- 这台电脑有/曾有四个用户名，我们称为 A，b, c，d

A 是开机会显示的用户名叫 XXX05，也是系统账户管理员，设置可查那种。b 则是很神奇的，在 WSL2 中显示为 XXX006，查不到。c 是用户文件夹名，叫 yyyyy。d 是其他人曾经用过的名字，叫 zzzz

## 完整过程

::: tip 建议
提前准备好下列内容：
1. 良好的网络环境
2. 用的顺手的终端(Windows Terminal, MobaxTerm...)
3. 符合启用WSL2条件的硬件和系统 
4. 一颗足够大不会被微软气死的心， F**K MICRO$OFT
:::

### 开启Hyper V等虚拟功能

先别急着重启

::: info 开启虚拟机相关服务
控制面板->程序->程序和功能->启用或关闭Windows功能->勾选下列内容：
- Windows 虚拟机监控程序平台
- 适用于Linux的Windows子系统
- 虚拟机平台
:::

::: info 开启Hyper V
对于`Windows 家庭版`用户：<a href="/docs/public/CommonScripts/Enable-HyperV.cmd" download>下载此脚本</a>
> 可自行审查代码，忘了是从哪抄来的了

对于`Windows 专业版`用户：控制面板->程序->程序和功能->启用或关闭Windows功能->勾选Hyper-V
:::
好了你可以重启了
### 启用并安装WSL2
以下操作均在 `终端` 中进行
::: info 启用WSL2

```
wsl --set-default-version 2
```
:::

::: info 安装WSL2 镜像
列出可用镜像
```
wsl --list --online
```
>你当然可以去折腾让WSL2用上Linux Mint这些微软没有官方支持的系统，这里不讲

比如，安装Debian
```
wsl --install Debian
```
>懒得折腾Arch，不过真羡慕pacman, AUR
:::

### WSL2配置

安装好后会让你输入UNIX用户名和密码
::: warning 注意
这里的用户名推荐仅输入小写英语 或 阿拉伯数字，你不会想费劲的

**不支持** 大写字母，特殊符号
:::

::: info 更改超级用户密码
```
sudo passwd root
```
会先让你输入当前用户密码，然后设置超级用户密码，保持一致即可

这是WSL2，不是独立的Linux系统，别费劲
:::

::: info 更新
为啥不换源，因为虽然WSL2的Debian是bookworm，但这玩意用上清华镜像源就直接IGN刷屏。

$**BYD HTTPS**$

依次执行：
```
sudo apt-get update
sudo apt install apt-transport-https ca-certificates
```
:::

::: info 换源加速
用你的浏览器打开[清华大学镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)，然后这么选： 
>传统格式  
>Debian12 (bookworm)
<el-checkbox v-model="checked1"  disabled label="启用源码源" />
<el-checkbox v-model="checked2"  disabled label="使用非自由软件源" />
<el-checkbox v-model="checked3"  disabled label="强制安全更新使用镜像" />

把这些内容复制下来

用你的终端输入：
```
sudo nano /etc/apt/sources.list
```
把所有东西都删了，把你复制的玩应粘贴进去,然后按 `Ctrl + X`，然后按 `Y`，按 `Enter` 保存  

最后再更新一下
```
sudo apt-get update && upgrade -y
```
:::

恭喜你，基础的WSL2配置完了

### WSL2美化
虽然我在win终端配置了Oh My Posh，但这玩应如果要对WSL2生效需要给WSL2也配置一下。

- Oh My Posh? `CONFIG ERROR`，`oh my posh command not found`等
- Starship? 那玩意对WSL2支持不算好
- FISH + Oh My Fish? 没我想要的主题，懒得写懒得移植
- nushell? 不会用，没用过
> 这几个除了Nushell我全踩过坑，就老老实实用zsh和omz就行了，性能少不了多少，主要是事少主题还好看

于是采用老两样：**ZSH + Oh My ZSH**

::: info ZSH
安装本体
```
sudo apt install zsh -y
```
不用着急启动
:::

::: info Oh My ZSH
执行OMZ安装脚本
```
sh -c "$(wget -O- https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"
```
下载语法高亮和补全建议插件
```
git clone https://gitee.com/asddfdf/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://gitee.com/chenweizhen/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
打开.zshrc
```
sudo nano ~/.zshrc
```
下载Powerlevel10k主题
```
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```
打开.zshrc
```
sudo nano ~/.zshrc
```
定位到ZSH_THEME，改成这样
```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

定位到plugins，然后改成这样
>插件不用开太多，够用就行
```
plugins=(git zsh-autosuggestions zsh-syntax-highlighting z extract web-search)
```
保存退出后执行：
```
source ~/.zshrc
```
如果你有看过我的[这篇文章](./../踩坑大全/winterm.md)，那么每一步跟着powerlevel10k配置下，应该所有符号显示正常，有且只有一大堆符号聚在一起时显示重叠，这个时候选显示不正常，然后按个人喜好配置即可
:::
::: info 展示
最后附上图片展示:
![Example.png](https://i.ibb.co/xKqtdf1P/Example.png")
:::


<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(true)
</script>