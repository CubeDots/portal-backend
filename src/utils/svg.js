//const baseUrl = window.App.baseUrl;
//const newSvgUrl = baseUrl+'/assets/d2webReact/assets/';

export function addOpacityTransitionStyle(doc, elementName = 'path') {
    let style = doc.querySelector('style')
    if (style) {
        style.innerHTML = style.innerHTML + `${elementName}{transition: opacity 0.3s ease-in-out };`
    }
}

export function getSVGDocument(el, check, callback) {
    let doc = el.contentDocument //el.getSVGDocument()
    if (doc) {
        if (check(doc)) {
            callback(doc)
        } else {
            setTimeout(() => {
                getSVGDocument(el, check, callback)
            }, 150)
        }
    } else {
        setTimeout(() => {
            getSVGDocument(el, check, callback)
        }, 150)
    }
}

export async function getSVGDocumentAsync(el, check) {
    return new Promise((resolve, reject) => {
        getSVGDocument(el, check, (doc) => {
            resolve(doc)
        })
    })
}


 export const getImagePath = (image) => {
    return `/assets/d2webReact/assets/${image}`
  }
  export const getHomeImagePath = (image) => {
    return `/assets/${image}.svg`
  }
  
  export const getImagePathAll = (image) => {
    return `/assets/${image}.svg`
  }

  export const getCompassPathAll = (image) => {
    return `/assets/${image}.png`
  }

  export const baseAssetsPath = (p) => {
    return `/assets/d2webReact/assets/${p}`
  }

  export const getPriceFormatIn4K = (p) => {
    return (p/1000).toString().split('.')[0];
  };
  export const ASPECT_1080 = 16 / 9
  export const ASPECT_4_3 = 4 / 3
  function isClientSide() {
    return typeof window !== 'undefined'
}

export function getScreenSize() {
    if (isClientSide()) {
       
        let dimensions = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
        let aspect = dimensions.w / dimensions.h
        let diff_1080 = Math.abs(aspect - ASPECT_1080)
        let diff_4_3 = Math.abs(aspect - ASPECT_4_3)
        dimensions.aspect = aspect
        dimensions.closestAspect = diff_1080 > diff_4_3 ? ASPECT_4_3 : ASPECT_1080
        dimensions.containAspect = ASPECT_4_3 < aspect ? ASPECT_1080 : ASPECT_4_3
        dimensions.closestAspectName = diff_1080 > diff_4_3 ? 'aspect_4_3' : 'aspect_16_9'
        dimensions.finalExpect =  1/(dimensions.closestAspect)
        return dimensions
    }
    
}