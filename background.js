// // listen for messages
// var tabs = [] 
// const f = async(msg) =>{
//     let arr = []
//     await chrome.windows.getAll({populate:true},(response)=>{
//         // let arr = []
//         response.map((window)=>{
//             console.log(response,"==s")
//             if(window.id == msg.windowId){
//                 window.tabs.map((tab)=>{
//                     if (tab.url == msg.url){
//                         console.log("----",arr)
//                         arr.push(tab.id)
//                     }a
//                 })
//                 if(arr.length > 1){
//                     arr.pop()
//                     console.log(arr.length)
//                     chrome.storage.local.set({'cnt':arr.length}).then((res)=>{
//                         console.log('res77',arr.length)
//                     })
//                     arr = []
//                     chrome.tabs.remove(arr,(response)=>{
//                         console.log('response',response)
//                     }
                    
//                 )}
//             }
//         })
//     })
    
//     chrome.storage.local.get(['cnt']).then((res)=>{
//         console.log('res78',res)
//     })
// }
// console.log(tabs,"ere")
// chrome.runtime.onMessage.addListener(async(msg,sender,sendResponse)=>{

//     console.log(tabs,"erepop",msg.ewre)
//     await f(msg).then(response=>{
//         sendResponse(response)
//     }
//     )
//     return true
// })