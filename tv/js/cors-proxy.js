/**
 * CORS代理服务 - 用于替代Node.js服务器代理
 * 这个文件提供了几种不同的CORS代理选项，使项目可以在没有Node.js的情况下本地运行
 */

// 可用的公共CORS代理服务列表
const CORS_PROXIES = [
    {
        name: 'CORS Anywhere',
        url: 'https://cors-anywhere.herokuapp.com/',
        requiresKey: false,
        active: true
    },
    {
        name: 'AllOrigins',
        url: 'https://api.allorigins.win/raw?url=',
        requiresKey: false,
        active: true
    },
    {
        name: 'CORS.sh',
        url: 'https://cors.sh/',
        requiresKey: true,
        keyParam: 'x-cors-api-key',
        active: false // 需要API密钥
    },
    {
        name: 'Cloudflare Workers CORS Proxy',
        url: 'https://corsproxy.io/?',
        requiresKey: false,
        active: true
    }
];

// 当前选择的代理服务索引
let currentProxyIndex = 0;

// 本地存储键名
const STORAGE_KEYS = {
    proxyIndex: 'selectedCorsProxyIndex',
    corsApiKey: 'corsProxyApiKey'
};

/**
 * 初始化CORS代理设置
 */
function initCorsProxy() {
    // 从本地存储加载之前选择的代理索引
    const savedIndex = localStorage.getItem(STORAGE_KEYS.proxyIndex);
    if (savedIndex !== null && !isNaN(parseInt(savedIndex))) {
        currentProxyIndex = parseInt(savedIndex);
    } else {
        // 默认使用第一个活跃的代理
        currentProxyIndex = CORS_PROXIES.findIndex(proxy => proxy.active);
        if (currentProxyIndex === -1) currentProxyIndex = 0;
        localStorage.setItem(STORAGE_KEYS.proxyIndex, currentProxyIndex.toString());
    }
    
    console.log(`CORS代理已初始化: ${CORS_PROXIES[currentProxyIndex].name}`);
}

/**
 * 获取当前选择的CORS代理服务
 */
function getCurrentProxy() {
    return CORS_PROXIES[currentProxyIndex];
}

/**
 * 切换到下一个可用的CORS代理
 */
function switchToNextProxy() {
    const activeProxies = CORS_PROXIES.filter(proxy => proxy.active);
    if (activeProxies.length === 0) {
        console.error('没有可用的CORS代理服务');
        return false;
    }
    
    // 找到当前代理在活跃代理列表中的位置
    const currentProxy = CORS_PROXIES[currentProxyIndex];
    const currentActiveIndex = activeProxies.findIndex(p => p.name === currentProxy.name);
    
    // 切换到下一个活跃代理
    const nextActiveIndex = (currentActiveIndex + 1) % activeProxies.length;
    const nextProxy = activeProxies[nextActiveIndex];
    currentProxyIndex = CORS_PROXIES.findIndex(p => p.name === nextProxy.name);
    
    // 保存选择
    localStorage.setItem(STORAGE_KEYS.proxyIndex, currentProxyIndex.toString());
    console.log(`已切换到CORS代理: ${nextProxy.name}`);
    return true;
}

/**
 * 使用CORS代理发送请求
 * @param {string} url - 目标URL
 * @param {Object} options - 请求选项
 * @returns {Promise<Response>} - 响应对象
 */
async function fetchWithCorsProxy(url, options = {}) {
    const proxy = getCurrentProxy();
    let proxyUrl;
    
    if (proxy.requiresKey) {
        // 对于需要API密钥的代理
        const apiKey = localStorage.getItem(STORAGE_KEYS.corsApiKey) || '';
        if (!apiKey) {
            console.warn(`${proxy.name}需要API密钥，但未设置`);
            if (switchToNextProxy()) {
                return fetchWithCorsProxy(url, options); // 递归调用，使用新代理
            }
        }
        
        // 根据代理服务的不同，API密钥可能作为URL参数或请求头
        if (proxy.keyParam) {
            // 作为请求头
            if (!options.headers) options.headers = {};
            options.headers[proxy.keyParam] = apiKey;
            proxyUrl = `${proxy.url}${encodeURIComponent(url)}`;
        } else {
            // 作为URL参数
            proxyUrl = `${proxy.url}${encodeURIComponent(url)}&apikey=${apiKey}`;
        }
    } else {
        // 不需要API密钥的代理
        proxyUrl = `${proxy.url}${encodeURIComponent(url)}`;
    }
    
    try {
        const response = await fetch(proxyUrl, options);
        if (!response.ok) {
            throw new Error(`代理请求失败: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error(`通过${proxy.name}代理请求失败:`, error);
        
        // 尝试切换到下一个代理
        if (switchToNextProxy()) {
            console.log('正在尝试使用另一个代理重试请求...');
            return fetchWithCorsProxy(url, options); // 递归调用，使用新代理
        }
        
        throw error;
    }
}

/**
 * 为URL添加鉴权参数
 * @param {string} url - 原始URL
 * @returns {Promise<string>} - 添加鉴权后的URL
 */
async function addAuthToProxyUrl(url) {
    // 在纯静态版本中，我们不再需要添加鉴权参数
    // 因为CORS代理不需要鉴权
    return url;
}

// 初始化CORS代理
initCorsProxy();

// 导出函数
window.CorsProxy = {
    fetchWithCorsProxy,
    getCurrentProxy,
    switchToNextProxy,
    addAuthToProxyUrl,
    CORS_PROXIES
};