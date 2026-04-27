---
title: 使用 Git 配置代理
date: '2026-04-27T17:04:00Z'
modifiedTime: '2025-05-29T17:04:00Z'
intro: 介绍 Git 代理的概念以及 HTTP/HTTPS 代理配置方法。
tags: ['git', 'proxy', 'github']
cover: 'https://img.eonova.me/picgo/20250529195625450.png'
---
## 遇到的问题

在使用 Git 拉取或推送 GitHub 仓库时，可能会遇到类似下面的报错：

```bash
fatal: unable to access 'https://github.com/xxx/xxx.git/':
Failed to connect to github.com port 443 after 21148 ms:
Could not connect to server
```

这个错误通常表示 Git 无法连接到 GitHub 的 443 端口。

在国内网络环境下，即使已经开启了全局代理，Git 也不一定会自动走系统代理。因此，如果浏览器可以正常访问 GitHub，但 Git 拉取、推送仍然失败，就可以考虑手动为 Git 配置代理。


## 什么是 Git 代理

Git 代理是指通过配置代理服务器，使 Git 能够通过该代理访问远程仓库。代理服务器充当客户端与目标服务器之间的中间层，转发请求并返回响应。

使用代理可以解决网络访问受限的问题，例如在内网环境中无法直接访问外部服务器，或者访问 GitHub 速度较慢的情况。

## 配置 HTTP 和 HTTPS 代理

可以通过以下命令设置全局 HTTP 和 HTTPS 代理：

```bash
git config --global http.proxy http://<代理地址>:<代理端口>
git config --global https.proxy https://<代理地址>:<代理端口>
```

代理端口必须去你用的代理软件里看，不能瞎填
常见代理软件和端口(在这里默认为http代理端口)：
clash：7890  
V2Ray / V2RayN：10809
Surge / Shadowrocket：7890/6152

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```

## 验证代理是否生效

配置完成后，可以通过以下命令检查代理是否生效：

```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

## 取消代理配置

如果不再需要代理，可以使用以下命令取消：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 修改配置文件

除了使用命令行，还可以直接编辑用户目录下的 `.gitconfig` 文件，添加以下内容：

```ini
[http]
proxy = http://127.0.0.1:7890

[https]
proxy = https://127.0.0.1:7890
```

修改后保存即可生效。

## 注意事项

### 端口设置

确保代理服务器的端口正确。如果出现 `Connection refused` 错误，可能是端口配置不匹配。

### 协议限制

上述配置仅适用于 HTTP 和 HTTPS 协议。如果使用 SSH 协议，例如 `git@github.com`，需要单独配置 SSH 代理。


## 总结

通过配置 Git 代理，可以有效提升访问速度，尤其是在网络受限或访问国外仓库时非常有用。
