
export type Mystate={
    posts:any
    users:{
        name : string,
        email:string,
        number:number,
        pic:string,
        password:string
    }[]
    sessionIndex:number,
    editIndex:number,
    msg:string
}

export type Myuser={
    name : string,
    email:string,
    number:number,
    pic:string,
    password:string
}