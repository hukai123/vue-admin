import fetch from '@/utils/fetch'

// 所有的api接口都写在这里，在页面上直接调用接口名字就好


// 方法一
export function FETCHMEMBERLIST(id,index) {     //直接返回请求对象
  return fetch({
    url: `/goodItem/${ index }`,
    method: 'post',
    data: {id}
  })
}

// 方法二
export function FETCHLAWYERLIST(data) {       //返回promise对象 
    return new Promise((resolve, reject) => {
        fetch({
            url: '/admin/lawyer/list',
            method: 'post',
            data: data,
            // params: data    
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}



