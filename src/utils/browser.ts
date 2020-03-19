import { toArray } from 'js-basic-kit'

export enum BrowserType {
    IE = 'IE',
    Edge = 'Edge',
    Firefox = 'Firefox',
    Opera = 'Opera',
    Safari = 'Safari',
    Chrome = 'Chrome',
    Unknow = 'Unknow',
  }

type IbrowserTypeMap = {
[key: string]: (ua: string) => boolean
}

type IbrowserVersionMap = {
[key: string]: RegExp[]
}

const browserTypeMap: IbrowserTypeMap = {
[BrowserType.Opera]: (ua) => ua.includes('Opera'),
[BrowserType.IE]: (ua) => ua.includes('MSIE') || ua.includes('Trident'),
[BrowserType.Edge]: (ua) => ua.includes('Edge'),
[BrowserType.Firefox]: (ua) => ua.includes('Firefox'),
[BrowserType.Safari]: (ua) => ua.includes('Safari') && !ua.includes('Chrome'),
[BrowserType.Chrome]: (ua) => ua.includes('Chrome') && ua.includes('Safari'),
}

const browserVersionMap: IbrowserVersionMap = {
[BrowserType.Opera]: [/Opera.([\d.]+)/],
[BrowserType.IE]: [/MSIE ([\d.]+)/, /rv:([\d.]+)/],
[BrowserType.Edge]: [/Edge\/([\d.]+)/],
[BrowserType.Firefox]: [/Firefox\/([\d.]+)/],
[BrowserType.Safari]: [/Version\/([\d.]+)/],
[BrowserType.Chrome]: [/Chrome\/([\d.]+)/],
}

export function getBrowserType(): BrowserType {
const userAgent = navigator.userAgent
for (const browserType of Object.keys(browserTypeMap)) {
    if (browserTypeMap[browserType](userAgent)) {
    return browserType as BrowserType
    }
}
return BrowserType.Unknow
}

export function getBrowserVersion(browserType: BrowserType): string {
const userAgent = navigator.userAgent
const regexps = toArray(browserVersionMap[browserType])
for (const regexp of regexps) {
    const match = userAgent.match(regexp)
    if (match) {
    return match[1]
    }
}
return '-1'
}
