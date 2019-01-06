export default class EditBox {

  constructor (dom) {

    this.dom = dom

  }

  wrap ({ markStart, markEnd, placeholder }) {

    let before = this.beforeText
    let after = this.afterText

    let text = `${!this.isCollapsed ? this.rangeText : placeholder || ''}`

    let value = `${before}${markStart}${text}${!!markEnd ? markEnd : ''}${after}`

    return this.returnMarkedText(
      value,
      [
        `${before}${markStart}${!this.isCollapsed ? this.rangeText : ''}`.length,
        `${before}${markStart}${text}`.length
      ]
    )
  }

  prepend () {
    // let 
  }

  /**
   * 
   * @param {String} value 被标记后的字符串
   * @param {Array} range range区域，start...end
   */
  returnMarkedText (value = '', range = []) {
    return { value, range }
  }

  getSelection () {
    const { selectionStart, selectionEnd } = this.dom

    return [selectionStart, selectionEnd]
  }

  get value () {
    return this.dom.value
  }

  // TODO:get方法设置前置函数getRange的执行
  get range () {
    return this.getSelection()
  }

  get startIndex () {
    return this.range[0]
  }

  get endIndex () {
    return this.range[1]
  }

  get beforeText () {
    let [start] = this.range
    return this.value.substring(0, start)
  }

  get rangeText () {
    let [start, end] = this.range
    return this.value.substring(start, end)
  }

  get afterText () {
    let [, end] = this.range
    return this.value.substring(end, this.value.length)
  }

  get isCollapsed () {
    const [start , end] = this.range
    return start === end
  }
}