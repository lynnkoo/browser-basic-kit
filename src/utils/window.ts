import { IS_WINDOWS } from './device'

export function initInnerHeight(rootNode: HTMLElement | null) {
    if (!rootNode) {
        return false
    }
    // windows 如果不减去两个像素就会出现滚动条
    const heightOffset = IS_WINDOWS ? -2 : 0
    const innerHeight = window.innerHeight
    rootNode.style.minHeight = innerHeight ? innerHeight + heightOffset  + 'px' : '100vh'
    return true
}
