// import NewNote from "./NewNote";

// function ItemList (props){
//    return (props.items.map((item) => {
//         return <NewNote note={item.note} key={item.id} />;
//       }))
// }
// export default ItemList

// import NewNote from "./NewNote";
// import {useState} from "react";

// function ItemFiltered (props){
//     const [filteredlist , setFilteredList] = useState(props.items)
//     function filterVal(e) {
//         if(e.target.value.length > 0){
//             setShowAnyOne(false)
//         }
//         let temparr =[]
//         props.items.map(item=>{   
//             if(item.note.toLowerCase().includes(e.target.value.toLowerCase())){
//                  temparr.push(item)
//             }
//         })
//         console.log(temparr)
//         setFilteredList(temparr)
//       }
//     return (
//         props.filteredItem.map((item) => {
//             return <NewNote note={item.note} key={item.id} />;
//           })
//     )
// }

// export default ItemFiltered