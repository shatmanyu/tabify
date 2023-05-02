document.addEventListener('DOMContentLoaded', () => {
const ele1 = document.getElementById('wi')
const ele2 = document.getElementById('tab-list')
// const top = document.getElementById('')

// to get tabs promise of current window
// use active,faviconUrl and url attrs
const currentTabs = chrome.tabs.query({}).then((response)=>{
    return response
})
currentTabs.then((response)=>{
    console.log("343",response)
})
chrome.windows.getAll({populate:true},(response)=>{
    const arr = response
    let cnt = 0
    arr.forEach(window => {
        cnt += 1
        const windowEle = document.createElement('button')
        windowEle.classList.add("top-btn")
        let l = window?.tabs?.length
        windowEle.innerHTML = 'Window ' + `${cnt}` + `${(window?.focused ? '(current) ':'')}` +  ': ' + l
        ele1.appendChild(windowEle)
        let mp = new Map()
        let mp1 = new Map()
        let mp2 = new Map()
        let arr1 = []
        let arr2 = {}
        window.tabs.forEach(tab=>{
            if(!mp.has(tab.url)){
                mp.set(tab.url,1)
                arr1.push(tab)
                mp1.set(tab.url,tab.active)
                mp2.set(tab.url,tab.id)
                arr2[tab.url] = []
            }
            else{
                let prev = mp.get(tab.url)
                mp.set(tab.url,prev+1)
                mp1.set(tab.url,mp1.get(tab.url) || tab.active)
                arr2[tab.url].push(tab.id)
            }
        })
        
        if(window.focused){
            arr1.forEach(tab=>{
            const tabEle = document.createElement('div')
            tabEle.classList.add("tab-ele")
            tabEle.innerHTML = `${mp1.get(tab.url)}` + ':' + `${mp.get(tab.url)}`
            if(arr2[tab.url].length == 0){
                tabEle.classList.add('disable')
            }
            tabEle.addEventListener('click',()=>{
                    if (arr2[tab.url].length >= 1){
                        chrome.tabs.remove(arr2[tab.url],(response)=>{
                        // console.log('response',response,arr2[tab.url])
                })
                tabEle.innerHTML = `${mp1.get(tab.url)}` + ':' + '1'
                l = l - arr2[tab.url].length
                arr2[tab.url] = []
                if(arr2[tab.url].length == 0){
                    tabEle.classList.add('disable')
                }
                document.querySelector(".top-btn").innerHTML = 'Window ' + `${cnt}` + `${(window?.focused ? '(current) ':'')}` +  ': ' + l
                
            }
            })
            ele2.appendChild(tabEle)
        })}
    });
})

});
