export const API_ENDPOINT = 'https://portal.cubedots.com/api/v1/';
//export const API_ENDPOINT = 'http://localhost:8000/api/v1/';
export function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
}