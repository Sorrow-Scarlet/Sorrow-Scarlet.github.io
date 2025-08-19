# Windows Terminal 美化经历

为 Windows 11 23H2 家庭中文版上的 Windows Terminal 美化

## 前情提要

- 闲得慌给终端做美化
- 这台电脑全部用户采用 **英文用户名**
- 这台电脑有/曾有四个用户名，我们称为 A，b, c，d

A 是开机会显示的用户名叫 XXX05，也是系统账户管理员，设置可查那种。b 则是很神奇的，在 WSL2 中显示为 XXX006，查不到。c 是用户文件夹名，叫 yyyyy。d 是其他人曾经用过的名字，叫 zzzz

## 完整过程

### 准备工作

#### 1. 字体
下载`Hack Nerd Mono`字体并应用

> Mono 字体，即等宽字体，适合终端与编程
::: info 具体操作
字体选择`Hack Nerd Mono Regular`：

- [通过 Github 下载](https://github.com/retteghy/hack-nerd-font/blob/master/patched-fonts/Hack/Regular/HackNerdFontMono-Regular.ttf)
- [通过 Gitee 下载](https://gitee.com/mirrors/nerd-fonts/blob/master/patched-fonts/Hack/Regular/HackNerdFontMono-Regular.ttf)
  :::

#### 2. 终端

::: info 更新 Windows Terminal

- 使用 winget 安装

```
winget install Microsoft.WindowsTerminal
```

:::

::: info 更新并切换至 Power Shell 7
- 使用 winget 安装

```
winget install Microsoft.PowerShell
```

- 重启 Windows Terminal
- 看向上方选项卡，找到`+`旁边的`∨`，选择设置
- 找到最上方的`启动`,将默认配置文件改为`PowerShell`
- 选择`PowerShell 7`，点击`确定`
:::


::: info 安装 Oh My Posh
- [官方文档](https://ohmyposh.dev/docs/installation/windows)
- 使用 Winget 安装
```
winget install JanDeDobbeleer.OhMyPosh --source winget --scope user --force
```
:::

:::details 配色方案
忘了网站名了，历史记录被清掉了，不过文件如下：

>setting.json
```

    "schemes":
    [
        {
            "background": "#191724",
            "black": "#706E86",
            "blue": "#31748F",
            "brightBlack": "#706E86",
            "brightBlue": "#31748F",
            "brightCyan": "#EBBCBA",
            "brightGreen": "#9CCFD8",
            "brightPurple": "#C4A7E7",
            "brightRed": "#EB6F92",
            "brightWhite": "#E0DEF4",
            "brightYellow": "#F6C177",
            "cursorColor": "#FFFFFF",
            "cyan": "#EBBCBA",
            "foreground": "#E0DEF4",
            "green": "#9CCFD8",
            "name": "Rose Pine",
            "purple": "#C4A7E7",
            "red": "#EB6F92",
            "selectionBackground": "#FFFFFF",
            "white": "#E0DEF4",
            "yellow": "#F6C177"
        }
    ],

```
将这段内容复制粘贴到通过`Windows Terminal`设置页面打开的`settings.json`文件的相同板块中，保存即可
:::

### 开始美化

::: info 更改字体与配色
1. 看向`Windows Terminal`上方选项卡，找到`+`旁边的`∨`，选择设置
2. 在设置中，点击`默认值`->`外观`
3. 字体->`Hack Nerd Font`
4. 配色方案->`Rose Pine`
:::

::: details $Profile配置

我的编辑器是 `VSCode`，所以打开终端，输入下列命令，会自动用`VScode`打开Powershell的个人配置文件

```

code $Profile

```


我的Microsoft.PowerShell_profile.ps1文件内容如下：

```

oh-my-posh init pwsh --config 'C:\Users\xxxxx\.config\clean-detailed.omp.json' | Invoke-Expression

Import-Module PSReadLine
Set-PSReadlineKeyHandler -Key Tab -Function Complete
Set-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete
Set-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

```
:::

::: info 刷新并检查
重启Windows Terminal,检查终端的界面是否发生了改变，是否存在如下问题：
1. 字体乱码 -- 十有八九是你没选对字体，执行如下步骤：重启，重选，重下，重装，重买，重开
2. 启动慢(System & Personal Profile took 500ms) -- 慢？那就对了，美化还想要快，去玩Starship吧
3. 其他问题 -- 问你的Deepseek, 腾讯元宝，Chat GPT，或者任何长得像AI的工具
:::


## 脚注

::: danger 切记
1. 用户名必须是英语或数字，否则会报错
2. 切记不要因为中文用户名而重命名用户文件夹，很困难，很折腾
3. F**K MICRO$OFT REGISTRY
:::

