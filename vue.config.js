// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
    devServer: { // 环境配置
        host: '0.0.0.0',
        public:'192.168.1.111:8080',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck:true,
        open: true // 配置自动启动浏览器

    }
}