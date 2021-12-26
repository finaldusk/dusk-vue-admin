class StorageFactory {
  private storage: Storage
  constructor(type: StorageType = 'localStorage') {
    this.storage = window[type]
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  delete(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

export default StorageFactory

type StorageType = 'localStorage' | 'sessionStorage'
