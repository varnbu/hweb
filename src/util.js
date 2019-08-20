export default function () {
    console.log('util js');
}
export function outSay() {
    console.log('say js hot hello util ');

}
export function helloBaiDu(){
    fetch('/baidu').then(res=>{
        console.log(res);
    })
}