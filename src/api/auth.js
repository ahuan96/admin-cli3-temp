import request from '@/utils/request'

export function userLogin(data){
    return request({
        url:'/userLogin',
        methods:'post',
        data
    })
}