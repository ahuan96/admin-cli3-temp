import request from '@/utils/request'

export function userLogin(data){
    return request({
        url:'/userLogin',
        methods:'get',
        data
    })
}

export function getUserInfo(data){
    return request({
        url:'/getInfo',
        methods:'get',
        data
    })
}