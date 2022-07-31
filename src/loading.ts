class Loading {
  private loadingWrapper: HTMLDivElement | null = null
  private loading: HTMLDivElement | null = null

  constructor() {
    this.loadingWrapper = document.createElement('div')
    this.loadingWrapper.style.width = '100vw'
    this.loadingWrapper.style.height = '100vh'
    this.loadingWrapper.style.overflow = 'hidden'
    this.loadingWrapper.style.display = 'none'
    this.loadingWrapper.style.position = 'absolute'
    this.loadingWrapper.style.top = '0'
    this.loadingWrapper.style.left = '0'

    this.loading = document.createElement('div')
    this.loading.style.width = '100%'
    this.loading.style.height = '100%'
    this.loading.style.position = 'absolute'
    this.loading.style.transform = 'translate(-100%, 0)'
    this.loading.style.transition = 'transform 300ms'
    this.loading.style.backgroundColor = 'orangered'

    this.loadingWrapper.appendChild(this.loading)
    document.body.appendChild(this.loadingWrapper)
  }

  start() {
    this.loadingWrapper!.style.display = 'block'
    setTimeout(() => {
      this.loading!.style.transform = 'translate(0, 0)'
    })
  }

  stop() {
    this.loading!.style.transform = 'translate(100%, 0)'
    setTimeout(() => {
      this.loadingWrapper!.style.display = 'none'
      this.loading!.style.transform = 'translate(-100%, 0)'
    }, 300)
  }
}

export default new Loading()
