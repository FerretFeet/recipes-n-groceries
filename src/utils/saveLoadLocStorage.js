export const saveLoadLocalStorage = {
    
    load: function (address) {
        let temp = localStorage.getItem(address)
        console.log(temp)
        console.log(address)
        if (temp === null) return;
        let el = JSON.parse(temp)
        return el
        
    },

    saveTo: function (el, address) {
        let temp = JSON.stringify(el)
        localStorage.setItem(address, temp)
    }
}