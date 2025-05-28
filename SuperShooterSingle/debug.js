// 添加全局错误处理
window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.error("Global Error:", {
    message: msg,
    url: url,
    lineNo: lineNo,
    columnNo: columnNo,
    error: error,
  });
  return false;
};

// 添加未捕获的Promise错误处理
window.addEventListener("unhandledrejection", function (event) {
  console.error("Unhandled Promise Rejection:", event.reason);
});

// 添加资源加载错误处理
window.addEventListener(
  "error",
  function (event) {
    if (
      event.target &&
      (event.target.tagName === "SCRIPT" ||
        event.target.tagName === "LINK" ||
        event.target.tagName === "IMG")
    ) {
      console.error("Resource Load Error:", {
        element: event.target.tagName,
        src: event.target.src || event.target.href,
        error: event.error,
      });
    }
  },
  true
);

// 定义调试日志函数
window.DEBUG = {
  log: function (component, action, data) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${component}] ${action}:`, data);
  },
  error: function (component, action, error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] [${component}] ${action} Error:`, error);
  },
  warn: function (component, action, data) {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] [${component}] ${action} Warning:`, data);
  },
};

// 监控游戏性能
window.DEBUG.performance = {
  marks: {},
  start: function (name) {
    this.marks[name] = performance.now();
  },
  end: function (name) {
    if (this.marks[name]) {
      const duration = performance.now() - this.marks[name];
      console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
      delete this.marks[name];
    }
  },
};

// 监控场景加载
window.DEBUG.scenes = {
  current: null,
  setScene: function (sceneName) {
    DEBUG.log("Scene", "Change", {
      from: this.current,
      to: sceneName,
      timestamp: new Date().toISOString(),
    });
    this.current = sceneName;
  },
};

// 监控资源加载
window.DEBUG.resources = {
  total: 0,
  loaded: 0,
  startTime: null,

  start: function (totalResources) {
    this.total = totalResources;
    this.loaded = 0;
    this.startTime = performance.now();
    DEBUG.log("Resources", "Loading Started", {
      total: totalResources,
      timestamp: new Date().toISOString(),
    });
  },

  progress: function (loadedCount) {
    this.loaded = loadedCount;
    const percentage = ((this.loaded / this.total) * 100).toFixed(2);
    DEBUG.log("Resources", "Loading Progress", {
      loaded: this.loaded,
      total: this.total,
      percentage: percentage + "%",
    });
  },

  complete: function () {
    const duration = performance.now() - this.startTime;
    DEBUG.log("Resources", "Loading Complete", {
      duration: duration.toFixed(2) + "ms",
      timestamp: new Date().toISOString(),
    });
  },
};

// 监控游戏状态
window.DEBUG.gameState = {
  current: null,
  setState: function (state) {
    DEBUG.log("GameState", "Change", {
      from: this.current,
      to: state,
      timestamp: new Date().toISOString(),
    });
    this.current = state;
  },
};

// 初始化调试工具
window.addEventListener("load", function () {
  DEBUG.log("Debug", "Initialization", "Debug tools initialized");
  DEBUG.performance.start("gameInit");

  // 检查浏览器兼容性
  DEBUG.log("System", "Browser Check", {
    userAgent: navigator.userAgent,
    webGL: !!window.WebGLRenderingContext,
    webGL2: !!window.WebGL2RenderingContext,
    canvas: !!window.HTMLCanvasElement,
    timestamp: new Date().toISOString(),
  });
});
