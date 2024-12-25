# miniprogram-switchscreen-detection-tool

微信小程序切屏检测工具

本小程序可用于验证用户自身的哪些操作会触发切屏检测机制。

## 如何运行项目

1. 安装微信开发者工具

2. 在微信开发者工具中导入本项目

3. 在微信开发者工具中打开 `终端` 并安装项目所需的 npm 包

    ```bash
    npm i tdesign-miniprogram -S --production --registry=https://registry.npmmirror.com
    ```

4. 在微信开发者工具中对 npm 包进行构建：`工具` -> `构建 npm`

5. 在微信开发者工具中点击 `编译` 按钮

6. 在微信开发者工具中点击 `预览` 按钮，扫描二维码即可在手机微信中打开小程序

7. 此时可在手机微信中进行应用切后台操作，并查看小程序的调试日志反馈

8. 也可以在手机微信中尝试悬浮窗、分屏、截图、屏幕识别等操作，并根据小程序的调试日志来判断是否触发切屏检测机制

## 原理

根据《微信小程序开发文档》的指引，小程序的切屏检测机制可通过以下 `应用级事件` 实现：

- `wx.onAppShow(function listener)` [监听小程序切后台事件](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html)
- `wx.onAppHide(function listener)` [监听小程序切后台事件](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html)
