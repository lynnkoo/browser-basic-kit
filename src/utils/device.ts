import { getBrowserType, getBrowserVersion, BrowserType } from './browser'

const mobileRegexp = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/
export const IS_MOBILE = mobileRegexp.test(navigator.userAgent.toLowerCase())

// system
export const IS_IOS = /(iPhone|iPod|iPad);?/i.test(navigator.userAgent)
export const IS_ANDROID = /Android/i.test(navigator.userAgent)
export const IS_IPAD = /iPad/i.test(navigator.userAgent)
export const IS_MAC = /macintosh|mac os x/i.test(navigator.userAgent)
export const IS_WINDOWS = /windows|win32/i.test(navigator.userAgent)

// webview
export const IS_WECHAT_WEBVIEW = /micromessenger/i.test(navigator.userAgent)
export const IS_QQ_WEBVIEW = /\Wqq\W/i.test(navigator.userAgent)

// borwser info
export const BROWSER_TYPE = getBrowserType()
export const BROWSER_VERSION = getBrowserVersion(BROWSER_TYPE)

export { BrowserType }
