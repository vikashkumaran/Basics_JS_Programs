import test, { chromium, expect } from '@playwright/test'
const user="admin"
const pass="mZE@l60wP%iO"
const cred=`${user}:${pass}`
const basicAuth=btoa(cred)
let id:any

//API Request to create a change request
test("Create a Change request",async({request})=>{
    /* const browser= await chromium.launch()
    const context= await browser.newContext()
    const page = context.request */
const response= await request.post("https://dev194776.service-now.com/api/now/table/change_request",{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
//directly we cannot pass value -> in Base64 -> ASCII
    },
    data:{
      "change_plan":"Test Plan New"
    }
})
const resBody=await response.json()
//console.log(resBody)
id=resBody.result.sys_id
expect(response.statusText()).toBe("Created")
//assertion
const statusCode=response.status()
expect(statusCode).toBe(201)
})

//API Request to get the created change request
test("GET change request",async({request})=>{
const response=await request.get(`https://dev194776.service-now.com/api/now/table/change_request/${id}`,{
headers:{
    "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
}
})
const res=await response.json()
//console.log(res)
const status=response.status()
expect(status).toBe(200)
expect(response.statusText()).toBe("OK")
let newChangePlan = res.result.change_plan;
console.log(newChangePlan)
})

//API Request to patch the created change request
test("PATCH change request",async({request})=>{
const response=await request.patch(`https://dev194776.service-now.com/api/now/table/change_request/${id}`,{
headers:{
    "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
},
data:{
    "change_plan":"New Change Plan Update"
}
})
const res=await response.json()
console.log(res)
const status=response.status()
expect(status).toBe(200)
expect(response.statusText()).toBe("OK")
let newChangePlan = res.result.change_plan;
console.log(newChangePlan)
})


//API Request to delete the created change request
test("Delete change request",async({request})=>{
const response=await request.delete(`https://dev194776.service-now.com/api/now/table/change_request/${id}`,{
headers:{
    "Content-Type":"application/json",
        "Authorization":`Basic ${basicAuth}`
}
})
const status=response.status()
expect(status).toBe(204)
expect(response.statusText()).toBe("No Content")
})