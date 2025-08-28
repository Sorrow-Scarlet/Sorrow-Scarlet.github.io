# 为 ArchLinux Minimal 安装 Openbox

在 VMware 虚拟机上的 ArchLinux 安装 Openbox 窗口管理器

::: warning 必看
替建议同时打开 [`Arch Wiki`](https://wiki.archlinux.org.cn),
:::

## 安装前准备

1. ArchLinux 官方 iso 镜像 (防止你玩脱了)
2. 安装好的 ArchLinux Minimal
3. 网络连接
4. 科学上网（可选）

## 安装前确认以下几点

1. 我已熟读[`装机法`](./geeklaw.md)三遍
2. 我有折腾 ArchLinux 的想法，并且会解决基础问题
3. 我不需要完整的 DE（Desktop Environment，即`桌面环境`）,那太臃肿了
4. 我不完全依赖键盘，我偏好鼠标操作

## 忌讳

1. 违反[`装机法`](./geeklaw.md)
2. 不看官方文档
3. 使用老旧的镜像
4. 虚拟机不创建快照

## 安装过程

### 更新系统

作为滚动发行版，哪怕不是滚动发行版，在做这些操作前均建议更新系统软件包

```
sudo pacman -Syyu
```

### 找到你顺手的 Shell

懒得配置 zsh 了，还得找镜像配置插件主题什么的，我的评价是

```
sudo pacman -S fish
```

### 为你的 tty 配置一些软件包

我假设你有在`pacman.conf`里配置了 archlinuxcn 的仓库，并且安装更新了 archlinuxcn-keyring

```
sudo pacman -S paru
```

当然你用 yay 也行，我先玩玩 paru

下面是个人常用内容，自行选择

```
sudo pacman -S fastfetch git wget curl base-devel flatpak noto-fonts-cjk ttf-hack-nerd helix pamac open-vm-tools ghostty thunar obconf-qt
```

### 安装 openbox

```
sudo pacman -S lightdm lightdm-gtk-greeter openbox xfce4-panel obconf-qt xterm
sudo systemctl enable --now lightdm.service
```

然后自行配置下 xfce4-panel 的自启就差不多了

### 重启电脑

```
reboot
```
