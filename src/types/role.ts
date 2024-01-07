export interface ListInt {
    authority:number[]
    roleId:number
    roleName: string
}
interface selectDataInt {
    roleId:number,
    roleName: string
}

interface dialogInt {
    show:boolean,
    title: string,
}
export interface edititemInt {
    id: number,
    nikeName: string,
    userName: string,
    role:number[],

}
export class initData {
    list: ListInt[] = []
    allDataList: ListInt[] = []
    selectData: selectDataInt = {
        roleId: 0,
        roleName: ''
    }

    editItem: edititemInt = {
        id: 0,
        nikeName: '',
        userName: '',
        role: []
    }

    dialog: dialogInt = {
        show:false,
        title:'修改用户权限',
    }
}