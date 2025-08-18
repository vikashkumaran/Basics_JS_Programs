let browserName="chrome";
let testType="sanity";
launchBrowser(browserName);
runTests(testType);
function launchBrowser(browserName){
    if(browserName==="chrome"){
        console.log(`${browserName} browser is launched`);
    }else{
        console.log(`${browserName} browser is launched`);
    }
};
function runTests(testType){
    switch (testType){
case "smoke":
    console.log(`${testType} testing is started`);
    break;
case "sanity":
    console.log(`${testType} testing is started`);
    break;
case "regression":
    console.log(`${testType} testing is started`);
    break;
default:
    console.log("smoke testing is started");
    }
};