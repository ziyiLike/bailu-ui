/**
 * Get the full vnode of the component instance (including the vnode of the Symbol(Fragment))
 * ForEach component instance, there will be a vnode of the Symbol(Fragment) in the children
 */

import { VNode } from 'vue'

export function useFullVNode(instance: VNode[] | undefined) {
  if (!instance) return []
  const _fullVNode: VNode[] = []
  const _getFullVNode = (instance: VNode[]) => {
    instance.forEach(vnode => {
      if (typeof vnode.type === 'symbol' && vnode.type.description === 'Fragment') {
        _getFullVNode(vnode.children as VNode[])
      } else {
        _fullVNode.push(vnode)
      }
    })
  }
  _getFullVNode(instance)

  return _fullVNode
}
