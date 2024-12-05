// Interface do blocos
interface Block{
    id:number,
    ref:string,
    follow:"container"|"text",
    content: string | Array<Block> | void,
    setContent: Function | null,
}

export default Block