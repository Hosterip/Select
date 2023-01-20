import {Select} from "./select/select"
import "./select/style.scss"

const select = new Select("#select", {
  placeholder: "Choose element please",
  selectedId: "4",
  data: [
    {id: "1", value: "React"},
    {id: "2", value: "React Native"},
    {id: "3", value: "Vue"},
    {id: "4", value: "Redux"},
    {id: "5", value: "Angular"},
    {id: "6", value: "Next"},
    {id: "7", value: "Nest"},
    {id: "8", value: "Vite"},
  ],
  onSelect(item) {
    console.log("Selected item", item)
  }
})
window.s = select