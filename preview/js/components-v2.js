window.Components = {
  listbox(options) {
    let modelName = options.modelName || 'selected'

    return {
      init() {
        this.optionCount = this.$refs.listbox.children.length
        this.$watch('activeIndex', (value) => {
          if (!this.open) return

          if (this.activeIndex === null) {
            this.activeDescendant = ''
            return
          }

          this.activeDescendant = this.$refs.listbox.children[this.activeIndex].id
        })
      },
      activeDescendant: null,
      optionCount: null,
      open: false,
      activeIndex: null,
      selectedIndex: 0,
      get active() {
        return this.items[this.activeIndex]
      },
      get [modelName]() {
        return this.items[this.selectedIndex]
      },
      choose(option) {
        this.selectedIndex = option
        this.open = false
      },
      onButtonClick() {
        if (this.open) return
        this.activeIndex = this.selectedIndex
        this.open = true
        this.$nextTick(() => {
          this.$refs.listbox.focus()
          this.$refs.listbox.children[this.activeIndex].scrollIntoView({ block: 'nearest' })
        })
      },
      onOptionSelect() {
        if (this.activeIndex !== null) {
          this.selectedIndex = this.activeIndex
        }
        this.open = false
        this.$refs.button.focus()
      },
      onEscape() {
        this.open = false
        this.$refs.button.focus()
      },
      onArrowUp() {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.optionCount - 1 : this.activeIndex - 1
        this.$refs.listbox.children[this.activeIndex].scrollIntoView({ block: 'nearest' })
      },
      onArrowDown() {
        this.activeIndex = this.activeIndex + 1 > this.optionCount - 1 ? 0 : this.activeIndex + 1
        this.$refs.listbox.children[this.activeIndex].scrollIntoView({ block: 'nearest' })
      },
      ...options,
    }
  },
}

window.Components.popoverGroup = function popoverGroup() {
  return {
    __type: 'popoverGroup',
    init() {
      let handler = (e) => {
        if (!document.body.contains(this.$el)) {
          window.removeEventListener('focus', handler, true)
          return
        }
        if (e.target instanceof Element && !this.$el.contains(e.target)) {
          window.dispatchEvent(
            new CustomEvent('close-popover-group', {
              detail: this.$el,
            })
          )
        }
      }
      window.addEventListener('focus', handler, true)
    },
  }
}

window.Components.popover = function popover({ open = false, focus = false } = {}) {
  const focusableSelector = [
    '[contentEditable=true]',
    '[tabindex]',
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'iframe',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
  ]
    .map((selector) => `${selector}:not([tabindex='-1'])`)
    .join(',')

  function focusFirst(container) {
    const focusableElements = Array.from(container.querySelectorAll(focusableSelector))

    function tryFocus(element) {
      if (element === undefined) return

      element.focus({ preventScroll: true })

      if (document.activeElement !== element) {
        tryFocus(focusableElements[focusableElements.indexOf(element) + 1])
      }
    }

    tryFocus(focusableElements[0])
  }

  return {
    __type: 'popover',
    open,
    init() {
      if (focus) {
        this.$watch('open', (open) => {
          if (open) {
            this.$nextTick(() => {
              focusFirst(this.$refs.panel)
            })
          }
        })
      }

      let handler = (e) => {
        if (!document.body.contains(this.$el)) {
          window.removeEventListener('focus', handler, true)
          return
        }
        let ref = focus ? this.$refs.panel : this.$el
        if (this.open && e.target instanceof Element && !ref.contains(e.target)) {
          let node = this.$el
          while (node.parentNode) {
            node = node.parentNode
            if (node.__x instanceof this.constructor) {
              if (node.__x.$data.__type === 'popoverGroup') return
              if (node.__x.$data.__type === 'popover') break
            }
          }
          this.open = false
        }
      }

      window.addEventListener('focus', handler, true)
    },
    onEscape() {
      this.open = false
      if (this.restoreEl) {
        this.restoreEl.focus()
      }
    },
    onClosePopoverGroup(e) {
      if (e.detail.contains(this.$el)) {
        this.open = false
      }
    },
    toggle(e) {
      this.open = !this.open
      if (this.open) {
        this.restoreEl = e.currentTarget
      } else if (this.restoreEl) {
        this.restoreEl.focus()
      }
    },
  }
}

window.Components.radioGroup = function radioGroup({ initialCheckedIndex = 0 } = {}) {
  return {
    value: undefined,
    init() {
      this.value = Array.from(this.$el.querySelectorAll('input'))[initialCheckedIndex]?.value
    },
  }
}
