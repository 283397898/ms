export interface User {
    userId: number, // 用户登录注册 id
    userName: string,  // 用户登录注册名
    roleId: number,  // enum 枚举 0 1 2 3 4 5 6 7 8 9 10
    roleName: string,
    roleDesc: string,
}