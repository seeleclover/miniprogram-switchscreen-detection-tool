// index.js
import { formatOnlyTime } from '../../utils/util.js';

Page({
  data: {
    logs: "", // 调试日志
  },
  // 添加一条调试日志
  async addLog(content) {
    await this.setData({ logs: this.data.logs + formatOnlyTime(new Date()) + " - " + content + "\n" });
  },
  // 清空调试日志
  async clearLog() {
    await this.setData({ logs: "" });
  },
  // 页面加载生命周期
  async onLoad(options) {
    // 监听小程序切前台事件
    await wx.onAppShow(async (options) => {
      const content = "触发小程序切前台事件";
      await this.addLog(content);
      console.log(content);
    });
    // 监听小程序切后台事件
    await wx.onAppHide(async (options) => {
      const content = "触发小程序切后台事件";
      await this.addLog(content);
      console.log(content);
    });
  }
})
