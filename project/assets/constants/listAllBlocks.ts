import Block from "./BlockInterface"

const listContainers: Array<Block> = [
    { id: 1, ref: "View", follow: "container", content: "", setContent: null},
]

const listTexts: Array<Block> = [
    { id: 1, ref: "Text", follow: "text", content: "", setContent: null},
]

export default { listContainers, listTexts }