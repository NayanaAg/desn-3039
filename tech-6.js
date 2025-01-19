function longest(s1, s2) {
    let array = (s1 + s2).split("").sort()
    let unique = [...new Set(array)]
    let finalstr = unique.join("")
    
    return finalstr
  }