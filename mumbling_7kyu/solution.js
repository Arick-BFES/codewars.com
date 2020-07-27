function accum(s) {
    return Array.from(s).map((a, b) => a.toUpperCase()+a.toLowerCase().repeat(b)).join('-')
  }