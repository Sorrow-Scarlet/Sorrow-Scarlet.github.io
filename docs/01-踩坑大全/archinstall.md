# 从零开始安装 ArchLinux(虚拟机)

在 Windows 系统上的 VMware 虚拟机上安装 ArchLinux

::: warning 必看
本篇文章**不能**代替[`Arch Wiki`](https://wiki.archlinux.org.cn), 建议同时打开 Wiki 备用
:::

## 安装前准备

1. ArchLinux 官方 iso 镜像
2. VMware 虚拟机: [点此前往 Github(无需登录)](https://github.com/201853910/VMwareWorkstation)
3. 网络连接
4. 科学上网（可选）

## 忌讳

1. 违反[`装机法`](./geeklaw.md)
2. 不看官方文档
3. 使用老旧的镜像

## 安装过程

### 系统安装前

::: details VMware 设置

1. 打开 VMware Workstation Pro，点击创建新的虚拟机
2. 选择典型，点击下一步
3. 安装镜像选择`Arch.iso`，点击下一步
4. 选择 Linux，其他 Linux 6.x 内核 64 位，点击下一步
5. 自行命名，选择合适路径，点击下一步
6. 自行分配磁盘大小，**储存为单个文件**，点击下一步
7. 点击完成

:::

:::details 关闭 Hyper-V(建议)

1. 按下`Windows键`, 输入`control`
2. 在打开的控制面板中,查看方式改为`类别`
3. 点击`程序`，点击`启用或关闭Windows功能`
4. 关闭这些项目： `Hyper-V`, `Virtual Machine Platform`, `Windows虚拟机监控程序平台`，`适用于Linux的Windows子系统`，`Windows沙盒`
5. 确定并重启

:::

### 系统安装阶段

为了你我的身心健康，使用`archinstall`吧

::: info `archinstall`前的准备

众所周知的原因，我们需要先配备一下镜像源，并关闭 reflector(科学上网用户请忽略这个模块)

> 关闭 reflector

```bash
systemctl mask reflector.service
```

> 使用 Vim 配置镜像源

```bash
vim /etc//pacman.d/mirrorlist
```

> 将下列内容放在镜像源的最顶部

```Text
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.jlu.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.cqu.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.xjtu.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.shanghaitech.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.nju.edu.cn/archlinux/$repo/os/$arch
Server = https://mirrors.hit.edu.cn/archlinux/$repo/os/$arch

```

:::

:::warning 警告
不建议保存`archinstall`设置  
`archinstall`在文档中表明将使用明文储存账号密码
:::

:::info `archinstall`,启动！

1. 启动安装脚本

```bash
archinstall
```

2. 前面的都别动，来到 Disk Partitioning，来分区

```Archinstall
Disk Configuration-> Partitioning->
Use a best-effort default partition layout->
btrfs-> Yes-> Use Compression-> back

```

3. Bootloader 改为 Grub
4. 自行配置 Hostname
5. 自行添加`sudo用户`和密码
6. Profile 选择自己喜欢的桌面环境
7. Audio 选择 pipewire(新电脑建议使用这个)
8. Network Configuration 选择 `Copy ISO network...`
9. 没别的问题其他维持默认即可，选择`install`

漫长的安装等待时间...

然后你应该看到这样一句话：

```Text
Would you like to chroot into the newly created installation
and perform post-installation configuration?
```

选 no，然后输入 reboot

:::

:::details 安装 gnome 桌面（可选）
如果你前面没安装任何桌面环境，来看吧
输入

```bash
sudo pacman -Syyu
sudo pacman -S gnome-desktop gdm ghostty gnome-control-center flatpak
```

:::

好了，安装完了，你的arch活了，翻[`Arch Wiki`](https://wiki.archlinux.org.cn)去吧
