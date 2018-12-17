function getsomething() {
    return 'something';
}

async function testAsync() {
    return 'hello world';
}

async function test() {
    const v2 = await testAsync();
    console.log(v2);
    const v1 = await getsomething();
    console.log(v1);
}

test();

const res = testAsync();

console.log(res);

function getlongtime() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('async_request_value');
        }, 2000);
    });

}

async function _test11() {

    const v3 = await getlongtime();
    console.log(v3);
}
_test11();