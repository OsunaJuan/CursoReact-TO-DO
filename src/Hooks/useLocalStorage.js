import React from "react";

function useLocalStorage(itemName,initialValue){
    const [item, setItem] = React.useState(initialValue);    
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);


    React.useEffect(()=>{setTimeout(() => {
        const LocalStorageItems = localStorage.getItem(itemName);
        let parsedItems;

        try{
            if(!LocalStorageItems){

                parsedItems = initialValue;    
                localStorage.setItem(itemName,JSON.stringify(initialValue));
    
            }else{
                parsedItems = JSON.parse(LocalStorageItems);
            }
    
            setItem(parsedItems)
            setLoading(false)
        } catch(error){
            setError(error)
        }
        
    }, 1000);},[])    


    function saveItemsToLocalStorage(ArrayItems){

        try{
            localStorage.setItem(itemName,JSON.stringify(ArrayItems));
            setItem(ArrayItems);
        }catch(error){
            setError(error);
        }

    }

    

    return {item,
        saveItemsToLocalStorage,
        loading,
        error
    };
}
export {useLocalStorage}; 


//   //Declaración del LocalStorage y sus funciones correspondientes.

//   const LocalStorageTodos = localStorage.getItem("TODOS_V1");
//   let parsedTODOS;

//   if(!LocalStorageTodos){

//     const defaultTodos = [
//       {text: "Llamar Mama", completed: false},
//       {text:"Sacar Perro", completed: false}
//     ];
//     parsedTODOS = defaultTodos;    
//     localStorage.setItem("TODOS_V1",JSON.stringify(defaultTodos));

//   }else{
//     parsedTODOS = JSON.parse(LocalStorageTodos);
//   }

//   function saveTODOSToLocalStorage(ArrayTODOS){

//     localStorage.setItem("TODOS_V1",JSON.stringify(ArrayTODOS));
//     setArrayTodos(ArrayTODOS);
